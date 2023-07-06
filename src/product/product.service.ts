import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { UpdateCategoryDto } from 'src/dto/update-category.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';
import { ProductEntity } from 'src/entity/ProductEntity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductEntity)  private readonly productEnity: Repository<ProductEntity>){}

  getAllProducts() {
    return this.productEnity;
  }

  getProductById(id: number) {
  }

  createProduct(_createProductDto: CreateProductDto) {
    return from(this.productEnity.save(_createProductDto))
  }

  updateProduct(id: number, updateProductDto: UpdateProductDto) {
    
  }

  deleteProduct(id: number) {
  }
}
