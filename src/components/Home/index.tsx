import { Suspense } from 'react'
import TextTop from '../common/TextTop'
import ProductList from './ProductList'

const Home = () => {
  return (
    <>
      <TextTop typography="h4">쇼핑하기</TextTop>
      <Suspense>
        <ProductList />
      </Suspense>
    </>
  )
}

export default Home
