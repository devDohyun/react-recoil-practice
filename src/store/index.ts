import { selector } from 'recoil'
import { getProducts } from '../models'

export const productsQuery = selector({
  key: 'productsQuery',
  get: async () => {
    const response = await getProducts()

    return response
  },
})
