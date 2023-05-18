import { rest } from 'msw'
import { products } from './data'

type TMockHandler<T extends keyof typeof rest> = Parameters<(typeof rest)[T]>[1]

export const getHandlers = () => [
  //
  rest.get('/api/products', getProductList),
  rest.get('/api/products/:id', getProductById),
]

const getProductList: TMockHandler<'get'> = (req, res, ctx) => {
  return res(ctx.delay(500), ctx.status(200), ctx.json(products))
}

const getProductById: TMockHandler<'get'> = (req, res, ctx) => {
  const id = req.params.id

  if (!id) {
    return res(ctx.status(400))
  }

  const item = products.find((item) => item.id === id)

  if (!item) {
    return res(ctx.delay(1500), ctx.status(404))
  }

  return res(ctx.delay(500), ctx.status(200), ctx.json(item))
}
