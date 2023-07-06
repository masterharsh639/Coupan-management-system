import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateCouponDto, UpdateCouponDto } from 'src/dto/coupan.dto';
import { CouponService } from 'src/coupans/coupan.service';
import { Observable } from 'rxjs';

const startDate = new Date(CreateCouponDto.start_date);
const endDate = new Date(CreateCouponDto.end_date);
@Controller('/coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) { }


  @Post('/')
  createCoupon(@Body() createCouponDto: CreateCouponDto): Observable<CreateCouponDto> {
    console.log(createCouponDto);
    return this.couponService.createCoupon(createCouponDto);
  }

  @Get('/')
  getAllCoupons() {
    return this.couponService.getAllCoupons();
  }

  @Get(':coupon_id')
  getCouponById(@Param('coupon_id') coupon_id: number) {
    return this.couponService.getCouponById(coupon_id);
  }

  @Put(':id')
  updateCoupon(@Param('id') id: number, @Body() updateCouponDto: UpdateCouponDto) {
    return this.couponService.updateCoupon(id, updateCouponDto);
  }

  @Delete(':id')
  deleteCoupon(@Param('id') coupan_id: number) {
    return this.couponService.deleteCoupon(coupan_id);
  }

  @Get('checkcouponvalidity/:coupon_code')
  async checkCoupanValidity(@Param('coupon_code') coupon_code: string) {
    const coupon=await this.couponService.getCouponByCode(coupon_code);
    if (coupon) {
      return { valid: true, message: 'Coupon is valid' };
    } else {
      return { valid: false, message: 'Coupon is not valid' };
    }
  }

  @Get(':coupon_code/applied-count')
  async getCouponAppliedCount(@Param('coupon_code') coupon_code: string){
    return this.couponService.getAppliedCount(coupon_code)
  }
}