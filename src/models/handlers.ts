import { products } from './data'
import { withLatency } from './utils'

export const getProducts = withLatency(() => {
  return [...products]
})
