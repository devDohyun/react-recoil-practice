import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { productsQuery } from '../../../store'
import { SkeletonSquare } from '../../common/Skeletons'
import Stack from '../../common/Stack'
import ProductListItem from './Item'

const ProductList = () => {
  const products = useRecoilValue(productsQuery)

  return (
    <StyledContainer>
      {products.map((item) => (
        <Link key={item.id} to={{ pathname: '/product', search: `?id=${item.id}` }}>
          <ProductListItem item={item} />
        </Link>
      ))}
    </StyledContainer>
  )
}

const ProductListFallback = () => (
  <StyledContainer>
    {Array.from({ length: 6 }).map((_, idx) => (
      <Stack key={idx} marginBottom="40px" justifyContent="flex-start">
        <SkeletonSquare width="75px" height="75px" marginRight="10px" />
        <div>
          <SkeletonSquare width="125px" height="22px" marginBottom="5px" />
          <SkeletonSquare width="225px" height="18px" />
        </div>
      </Stack>
    ))}
  </StyledContainer>
)

const StyledContainer = styled.div`
  padding: 0 20px;
`

export { ProductListFallback }
export default ProductList
