import { screen } from '@testing-library/react'
import Home from '../../components/Home'
import { renderWithBaseComponents } from '../../core/testUtils'
import * as handlers from '../../models/handlers'

describe('<Home />', () => {
  test('상품 목록이 잘 노출되나요?', async () => {
    const spyOnGetProducts = jest.spyOn(handlers, 'getProducts')

    renderWithBaseComponents(<Home />, { route: '/' })

    screen.getByText(/쇼핑하기/)

    expect(spyOnGetProducts).toBeCalledTimes(1)
  })
})
