import { Module } from '@nestjs/common';
import { ProductEntity } from 'src/entity/ProductEntity';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity])
    ],
    providers: [ProductService],
    controllers:[ProductController]
})
export class ProductModule {}
