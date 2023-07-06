import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { CreateCouponDto, UpdateCouponDto } from 'src/dto/coupan.dto';
import { PostCouponEntity } from 'src/entity/PostCouponEntity';
import { FindOneOptions, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';

const currentDate = new Date();
@Injectable()
export class CouponService {
  constructor(@InjectRepository(PostCouponEntity) private readonly coupanPostEnity: Repository<PostCouponEntity>) { }

  getAllCoupons() {
    return from(this.coupanPostEnity.find())
  }

  getCouponById(coupon_id: number) {
    const options: FindOneOptions<PostCouponEntity> = {
      where: { coupon_id },
    };
    return this.coupanPostEnity.findOne(options);
  }

  createCoupon(_createCouponDto: CreateCouponDto): Observable<CreateCouponDto> {
    return from(this.coupanPostEnity.save(_createCouponDto));
  }

  updateCoupon(id: number, updateCouponDto: UpdateCouponDto) {
    return this.coupanPostEnity.update(id, updateCouponDto)
  }

  deleteCoupon(coupan_id: number) {
    return this.coupanPostEnity.delete(coupan_id)
  }

  getCouponByCode(coupon_code: string) {
    const options: FindOneOptions<PostCouponEntity> = {
      where: {
        coupon_code,
        start_date: LessThanOrEqual(currentDate),
        end_date: MoreThanOrEqual(currentDate),
      },
    };
    return this.coupanPostEnity.findOne(options);
  }

  async getAppliedCount(coupon_code: string): Promise<number> {
    const options: FindOneOptions<PostCouponEntity> = {
      where: { coupon_code },
    };
    const coupon = await this.coupanPostEnity.findOne(options);
    if (coupon) {
      return coupon.appliedCount;
    }
    return 0;
  }
}
