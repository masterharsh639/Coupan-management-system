import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  product_category_id: number;

  @Column()
  category_name: string;

  @Column()
  max_reward_points: number;
  
  @ManyToOne(() => CategoryEntity, category => category.sub_categories)
  parent_category: CategoryEntity;

  @OneToMany(() => CategoryEntity, category => category.parent_category)
  sub_categories: CategoryEntity[];
}
