import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';
import { ProductController } from './product/product.controller';
import { CouponController } from './coupans/coupan.controller';
import { CouponService } from './coupans/coupan.service';
import { ProductService } from './product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoupansModule } from './coupans/coupans.module';
import { ProductModule } from './product/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesService } from './categories/categories.service';
import { PostCouponEntity } from './entity/PostCouponEntity';
import { ProductEntity } from './entity/ProductEntity';
import { CategoryEntity } from './entity/CategoryEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'harsh1997',
      database: 'coupanDB',
      entities: [PostCouponEntity, ProductEntity, CategoryEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PostCouponEntity, ProductEntity, CategoryEntity]),
    CoupansModule, ProductModule, CategoriesModule],
  controllers: [CouponController, CategoriesController, ProductController],
  providers: [CouponService, CategoriesService, ProductService],
})
export class AppModule { }

