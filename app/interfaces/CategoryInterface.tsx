export interface ICategoriesResponse {
  data: ICategory[]
  meta: Meta
}

export interface ICategory {
  id: number
  attributes: IAttributes
}

export interface IAttributes {
  name: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
