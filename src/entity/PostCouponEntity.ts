import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProductEntity } from './ProductEntity';
import { CategoryEntity } from './CategoryEntity';

enum DiscountType {
  Percentage = 'percentage',
  Flat = 'flat',
}

@Entity()
export class PostCouponEntity {
  @PrimaryGeneratedColumn()
  coupon_id: number;

  @Column({ unique: true })
  coupon_code: string;

  @Column()
  discount: number;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  // @Column()
  // is_global: boolean;

  // @Column()
  // product_id:number

  // @Column()
  // category_id:number

  @Column({ type: 'enum', enum: DiscountType, default: DiscountType.Percentage })
  discountType: DiscountType;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
  
  @ManyToOne(() => ProductEntity, product => product.coupons)
  product: ProductEntity;
  appliedCount: number | PromiseLike<number>;
}
