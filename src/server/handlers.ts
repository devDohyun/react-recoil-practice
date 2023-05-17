import { rest } from 'msw'
import { products } from './data'

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([...products]))
  }),
  rest.get('/products/:id', (req, res, ctx) => {
    const id = req.params.id

    if (!id) {
      return res(ctx.status(400))
    }

    const item = products.find((item) => item.id === id)

    if (!item) {
      return res(ctx.status(404))
    }

    return res(ctx.status(200), ctx.json(item))
  }),
]
