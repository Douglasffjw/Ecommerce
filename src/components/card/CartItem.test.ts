import CartItem from '@/components/card/CartItem.vue'
import { Product } from '@/model/product.model'
import { mount } from '@vue/test-utils'
// Descreve o cenário de teste do componente
describe('CartItem.vue', () => {
  // Escopo de teste para verificar se o componente é montado corretamente
  test('Mount component', async () => {
    //Verifica se o componente é importado corretamente
    expect(CartItem).toBeTruthy()
    // Monta o componente / Aqui você pode props mockadas para teste
    const wrapper = mount(CartItem, {
      props: {
        item: {
          product: new Product('1', 'Product 1', 'Description 1', 100, 0.1),
          quantity: 2,
        },
      },
    })
    // Aqui faz as verificações explicitando o que deve ser renderizado
    // Com wrapper.get() pode-se acessar os elementos do template
    expect(wrapper.get('h3').text()).toBe('Product 1')

    expect(wrapper.get('p').text()).toBe(
      // Verifica se o preço segue o formato de moeda brasileira
      new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(100),
    )
  })
  // Fim do escopo de teste para verificar se o componente é montado corretamente
})
