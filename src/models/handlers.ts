import { TProduct } from '../types'
import { products } from './data'
import { withLatency } from './utils'

export const getProducts = withLatency(() => {
  return [...products]
})
export const getProductById = withLatency((id: TProduct['id']) => {
  return products.find((item) => item.id === id)
})

const paymentCache: { [key: string]: number } = {}
export const checkPaymentDone = withLatency((orderId: string) => {
  paymentCache[orderId] = (paymentCache[orderId] || 0) + 1
  const isDone = paymentCache[orderId] > 5

  if (isDone) delete paymentCache[orderId]

  return {
    orderId,
    isDone,
  }
}, 1000)
