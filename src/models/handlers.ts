import { TProduct } from '../types'
import { products } from './data'
import { withLatency } from './utils'

export const getProducts = withLatency(() => {
  return [...products]
})
export const getProductById = withLatency((id: TProduct['id']) => {
  return products.find((item) => item.id === id)
})
