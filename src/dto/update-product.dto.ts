// update-product.dto.ts
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  product_name?: string;

  @IsOptional()
  @IsString()
  product_description?: string;

  @IsOptional()
  @IsNumber()
  product_category_id?: number;

  @IsOptional()
  @IsNumber()
  reward_point?: number;
}
