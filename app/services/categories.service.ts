import api from "../config/axios"
import CategoryDTO from "../data/CategoryDto"
import { ICategoriesResponse } from "../interfaces/CategoryInterface"

class CategoryService {
  static async getAllCategories() {
    const { data } = await api.get<ICategoriesResponse>("/categories")

    const categories = data.data.map((category) =>
      CategoryDTO.toCategory(category)
    )

    return categories
  }
}

export default CategoryService
