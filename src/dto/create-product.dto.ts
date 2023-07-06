// create-product.dto.ts
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  product_name: string;

  @IsNotEmpty()
  @IsString()
  product_description: string;

  @IsNotEmpty()
  @IsNumber()
  product_category_id: number;

  @IsNotEmpty()
  @IsNumber()
  reward_point: number;
}
