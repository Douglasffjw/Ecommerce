<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from './components/card/ProductCard.vue'
import { Product } from './model/product.model'
import { Cart } from './model/cart.model'

export default defineComponent({
  name: 'App',
  components: { ProductCard },
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(1, 'Tênis Nike Air Max 270', 599.99, { id: 1, title: 'Esporte' }),
        new Product(2, 'Tênis Adidas Ultraboost 21', 299.99, { id: 2, title: 'Casual' }),
        new Product(3, 'Camiseta Básica', 49.9, { id: 3, title: 'Vestuário' }),
      ] as Product[],
    }
  },
  methods: {
    addToCart(product: Product) {
      this.cart.addItem(product)
    },
    removeOne(productId: number) {
      this.cart.removeOne(productId)
    },
    removeItem(productId: number) {
      this.cart.removeItem(productId)
    },
  },
  computed: {
    totalItems(): number {
      return this.cart.totalItems
    },
    totalPrice(): number {
      return this.cart.totalPrice
    },
  },
})
</script>

<template>
  <main>
    <section>
      <h1>Produtos</h1>
      <div class="products">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add="addToCart"
        />
      </div>
    </section>

    <aside>
      <h1>Meu carrinho</h1>
      <div v-if="cart.list.length === 0">Carrinho vazio</div>
      <ul>
        <li v-for="item in cart.list" :key="item.product.id">
          {{ item.product.name }} x {{ item.quantity }}
          <button @click="removeOne(item.product.id)">-</button>
          <button @click="removeItem(item.product.id)">Remover</button>
        </li>
      </ul>
      <p>Total de itens: {{ totalItems }}</p>
      <p>Preço final: R$ {{ totalPrice.toFixed(2).replace('.', ',') }}</p>
    </aside>
  </main>
</template>
