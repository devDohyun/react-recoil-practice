import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import PageHome from './pages/Home'
import PageProductDetail from './pages/Product/Detail'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageHome />,
    },
    {
      path: '/product',
      children: [
        {
          path: ':id',
          element: <PageProductDetail />,
        },
      ],
    },
  ])

  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  )
}

export default App
