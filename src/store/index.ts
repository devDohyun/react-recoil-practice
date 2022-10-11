import { selector, selectorFamily } from 'recoil'
import { getProductById, getProducts } from '../models'
import { TProduct } from '../types'

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
