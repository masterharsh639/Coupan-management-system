import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PostCouponEntity } from './PostCouponEntity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  product_name: string;

  @Column()
  product_description: string;

  @Column()
  product_category_id: number;

  @Column()
  reward_point: number;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(() => PostCouponEntity, coupon => coupon.product)
  coupons: PostCouponEntity[];
}
