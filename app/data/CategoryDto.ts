import { ICategory } from "../interfaces/CategoryInterface"

class CategoryDTO {
  id: number
  name: string

  constructor(category: ICategory) {
    this.id = category.id
    this.name = category.attributes.name
  }

  static toCategory(category: ICategory) {
    return new CategoryDTO(category)
  }
}

export default CategoryDTO
