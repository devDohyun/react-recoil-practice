import { screen } from '@testing-library/react'
import Home from '../../components/Home'
import { renderWithBaseComponents } from '../../core/testUtils'
import { TProduct } from '../../types'
import * as remotes from '../../core/http/remotes'

const mockProducts: TProduct[] = [
  {
    id: 'P12082',
    img: '/product-2.png',
    name: 'Apple watch',
    price: 599000,
    content: `Atoms는 React의 로컬 컴포넌트의 상태 대신 사용할 수 있다.`,
    shipping: 1665538745200,
    stock: 81,
  },
]

jest.mock('../../core/http/remotes', () => ({ getProducts: jest.fn(() => Promise.resolve(mockProducts)) }))

describe('<Home />', () => {
  test('상품 목록이 잘 노출되나요?', async () => {
    const spyOnGetProducts = jest.spyOn(remotes, 'getProducts')

    renderWithBaseComponents(<Home />, { route: '/' })

    expect(await screen.findByText(/쇼핑하기/)).toBeInTheDocument()

    expect(spyOnGetProducts).toHaveBeenCalled()
  })
})
