import { Suspense } from 'react'
import { SkeletonSquare } from '../common/Skeletons'
import Stack from '../common/Stack'
import TextTop from '../common/TextTop'
import ProductList from './ProductList'

const ProductListFallback = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Stack key={idx} marginBottom="40px">
          <SkeletonSquare width="75px" height="75px" marginRight="10px" />
          <div>
            <SkeletonSquare width="125px" height="22px" marginBottom="5px" />
            <SkeletonSquare width="225px" height="18px" />
          </div>
        </Stack>
      ))}
    </>
  )
}

const Home = () => {
  return (
    <>
      <TextTop typography="h4">쇼핑하기</TextTop>
      <Suspense fallback={<ProductListFallback />}>
        <ProductList />
      </Suspense>
    </>
  )
}

export default Home
