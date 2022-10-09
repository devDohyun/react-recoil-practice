import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageHome from './pages/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageHome />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
