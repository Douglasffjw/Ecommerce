export interface Product {
  id: string | number
  name?: string
  title?: string
  price: number
  image?: string
  description?: string
  discount?: number
}

export interface CartItem {
  product: Product
  quantity: number
}
