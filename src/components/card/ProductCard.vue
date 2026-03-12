<template>
  <article>
    <h2>{{ product.name }}</h2>
    <p>Categoria: {{ product.category.title }}</p>
    <p>Preço: R$ {{ product.price.toFixed(2).replace('.', ',') }}</p>
    <button @click="addItem">Adicionar</button>
  </article>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { Product } from '@/model/product.model'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  emits: ['add'],
  methods: {
    addItem() {
      this.$emit('add', this.product)
    },
  },
})
</script>
