import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/model/product.model'
import type { ICartItem } from '@/model/cart.model'

const CART_STORAGE_KEY = 'ecommerce-cart'

interface SerializedCartItem {
  product: Product
  quantity: number
}

function readCartSnapshot(): SerializedCartItem[] {
  const saved = localStorage.getItem(CART_STORAGE_KEY)
  if (!saved) {
    return []
  }

  try {
    return JSON.parse(saved) as SerializedCartItem[]
  } catch {
    return []
  }
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<ICartItem[]>(readCartSnapshot())

  const count = computed(() => items.value.reduce((acc, item) => acc + item.quantity, 0))

  const total = computed(() =>
    items.value.reduce(
      (acc, item) => acc + item.product.price * (1 - item.product.discount) * item.quantity,
      0,
    ),
  )

  const formattedTotal = computed(() => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      total.value,
    )
  })

  function persist() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items.value))
  }

  function addItem(product: Product) {
    const existing = items.value.find((item) => item.product.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      items.value.push({ product, quantity: 1 })
    }
    persist()
  }

  function decrementItem(product: Product) {
    const existing = items.value.find((item) => item.product.id === product.id)
    if (!existing) {
      return
    }

    if (existing.quantity === 1) {
      removeItem(product)
      return
    }

    existing.quantity -= 1
    persist()
  }

  function removeItem(product: Product) {
    items.value = items.value.filter((item) => item.product.id !== product.id)
    persist()
  }

  function clearCart() {
    items.value = []
    persist()
  }

  return {
    items,
    count,
    total,
    formattedTotal,
    addItem,
    decrementItem,
    removeItem,
    clearCart,
  }
})
