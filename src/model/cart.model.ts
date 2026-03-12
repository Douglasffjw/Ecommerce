import { Product } from './product.model'

export interface CartItem {
  product: Product
  quantity: number
}

export class Cart {
  public list: CartItem[] = []

  constructor(list: CartItem[] = []) {
    this.list = list
  }

  addItem(product: Product) {
    const item = this.list.find((i) => i.product.id === product.id)
    if (item) item.quantity++
    else this.list.push({ product, quantity: 1 })
  }

  removeOne(productId: number) {
    const item = this.list.find((i) => i.product.id === productId)
    if (!item) return
    if (item.quantity > 1) item.quantity--
    else this.removeItem(productId)
  }

  removeItem(productId: number) {
    this.list = this.list.filter((i) => i.product.id !== productId)
  }

  get totalItems() {
    return this.list.reduce((s, i) => s + i.quantity, 0)
  }

  get totalPrice() {
    return this.list.reduce((s, i) => s + i.quantity * i.product.price, 0)
  }
}
