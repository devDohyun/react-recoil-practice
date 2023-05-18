import { selector, selectorFamily } from 'recoil'
import { TProduct } from '../types'
import { getProductById, getProducts } from '../core/http/remotes'

export const productsQuery = selector({
  key: 'productsQuery',
  get: async () => {
    const response = await getProducts()

    return response
  },
})

export const productDetailQuery = selectorFamily({
  key: 'productDetailQuery',
  get: (productId: TProduct['id']) => async () => {
    const response = await getProductById(productId)

    return response
  },
})
