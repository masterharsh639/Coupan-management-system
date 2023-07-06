import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCouponDto {

  @IsNumber()
  @IsNotEmpty()
  coupan_id: number;

  @IsString()
  @IsNotEmpty()
  coupan_code: string;

  @IsNumber()
  @IsNotEmpty()
  discount: number;

  @IsBoolean()
  @IsNotEmpty()
  is_global: boolean;

  @IsNumber()
  @IsNotEmpty()
  product_id: number;

  @IsNumber()
  @IsNotEmpty()
  category_id: number;

  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @IsNotEmpty()
  discount_type: string;

  @IsNotEmpty()
  @IsDate()
  end_date: Date;

  createdAt: Date;

  updatedAt: Date;
  static end_date: string | number | Date;
  static start_date: string | number | Date;
}

export class UpdateCouponDto {
  
  @IsNumber()
  @IsNotEmpty()
  coupan_id: number;

  @IsString()
  @IsNotEmpty()
  coupan_code: string;

  @IsNumber()
  @IsNotEmpty()
  discount: number;

  @IsBoolean()
  @IsNotEmpty()
  is_global: boolean;

  @IsNumber()
  @IsNotEmpty()
  product_id: number;

  @IsNumber()
  @IsNotEmpty()
  category_id: number;

  @IsNotEmpty()
  @IsDate()
  start_date: Date;
  
  @IsNotEmpty()
  discount_type: string;

  @IsNotEmpty()
  @IsDate()
  end_date: Date;

  createdAt: Date;

  updatedAt: Date;
}
