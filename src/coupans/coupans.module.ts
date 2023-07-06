import { Module } from '@nestjs/common';
import { CouponController } from './coupan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCouponEntity } from 'src/entity/PostCouponEntity';
import { CouponService } from './coupan.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([PostCouponEntity])
    ],
    providers: [CouponService],
    controllers:[CouponController]
})
export class CoupansModule { }
