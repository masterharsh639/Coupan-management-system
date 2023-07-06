import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoryEntity } from 'src/entity/CategoryEntity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
        TypeOrmModule.forFeature([CategoryEntity])
    ],
    controllers:[CategoriesController],
    providers:[CategoriesService]
})
export class CategoriesModule {}
