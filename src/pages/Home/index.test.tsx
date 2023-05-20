import { screen } from '@testing-library/react'

import { renderWithBaseComponents } from '../../core/testUtils'
import Home from '../../components/Home'
import { server } from '../../server/node'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' })
})
afterAll(() => {
  server.close()
})

describe('<Home />', () => {
  test('상품 목록이 잘 노출되나요?', async () => {
    renderWithBaseComponents(<Home />, { route: '/' })

    expect(await screen.findByText(/쇼핑하기/)).toBeInTheDocument()
  })
})
