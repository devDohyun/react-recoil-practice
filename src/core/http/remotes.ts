import { TProduct } from '../../types'
import { http } from './instance'

export const getProducts = () => http.get<TProduct[]>(`/api/products`)

export const getProductById = (productId: string) => http.get<TProduct>(`/api/products/${productId}`)
