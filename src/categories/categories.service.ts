import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/dto/update-category.dto';


@Injectable()
export class CategoriesService {
  private categories = []; 
  getAllCategories() {
    return this.categories;
  }

  getCategoryById(id: number) {
    return this.categories.find(category => category.product_category_id === id);
  }

  createCategory(createCategoryDto: CreateCategoryDto) {
    const newCategory = {
      product_category_id: Date.now(),
      ...createCategoryDto,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    const categoryIndex = this.categories.findIndex(category => category.product_category_id === id);
    if (categoryIndex !== -1) {
      this.categories[categoryIndex] = {
        ...this.categories[categoryIndex],
        ...updateCategoryDto,
      };
      return this.categories[categoryIndex];
    }
    return null;
  }

  deleteCategory(id: number) {
    const categoryIndex = this.categories.findIndex(category => category.product_category_id === id);
    if (categoryIndex !== -1) {
      const deletedCategory = this.categories[categoryIndex];
      this.categories.splice(categoryIndex, 1);
      return deletedCategory;
    }
    return null;
  }
}
