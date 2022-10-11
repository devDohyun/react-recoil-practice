import styled from '@emotion/styled'
import { Suspense } from 'react'
import { useRecoilValue } from 'recoil'
import { formatNumber, getDateString } from '../../core/utils'
import useRouter from '../../hooks/useRouter'
import { productDetailQuery } from '../../store'
import colors from '../../styles/palette'
import { fontSize } from '../../styles/typography'
import { TProduct } from '../../types'
import BottomCTAButton from '../common/BottomCTAButton'
import { SkeletonSquare } from '../common/Skeletons'

const ProductInfoFallback = () => (
  <>
    <SkeletonSquare width="100vw" height="100vw" />
    <StyledArticle>
      <SkeletonSquare width="250px" height="40px" marginBottom="10px" />
      <SkeletonSquare width="300px" height="20px" marginBottom="20px" />
      <SkeletonSquare width="150px" height="20px" marginBottom="20px" />
      <SkeletonSquare width="90vw" height="20px" marginBottom="20px" />
      <SkeletonSquare width="85vw" height="20px" marginBottom="20px" />
      <SkeletonSquare width="80vw" height="20px" marginBottom="20px" />
      <SkeletonSquare width="90vw" height="20px" marginBottom="20px" />
      <SkeletonSquare width="65vw" height="20px" marginBottom="20px" />
      <SkeletonSquare width="90vw" height="20px" marginBottom="20px" />
      <SkeletonSquare width="65vw" height="20px" marginBottom="20px" />
    </StyledArticle>
  </>
)

const ProductInfo = ({ productId }: { productId: TProduct['id'] }) => {
  const productItem = useRecoilValue(productDetailQuery(productId))

  if (!productItem) return <></>

  const shippingDate = getDateString(productItem.shipping)

  return (
    <>
      <StyledImage src={productItem.img} alt="product" />
      <StyledArticle>
        <StyledName>{productItem.name}</StyledName>
        <StyledAdditional>
          재고 {productItem.stock}개 남음 · {shippingDate} 배송
        </StyledAdditional>
        <StyledPrice>₩{formatNumber(productItem.price)}부터</StyledPrice>
        <StyledContent dangerouslySetInnerHTML={{ __html: productItem.content }}></StyledContent>
      </StyledArticle>
    </>
  )
}

const ProductDetail = ({ productId }: { productId: TProduct['id'] }) => {
  const router = useRouter()

  return (
    <StyledContainer>
      <Suspense fallback={<ProductInfoFallback />}>
        <ProductInfo productId={productId} />
      </Suspense>
      <BottomCTAButton onClick={() => router.push(`/order/${productId}`)}>구매하기</BottomCTAButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  padding-bottom: 100px;
`

const StyledImage = styled.img`
  width: 100%;
  min-height: 100vw;
`
const StyledArticle = styled.div`
  padding: 20px;
`
const StyledName = styled.div`
  font-size: ${fontSize.h4};
  font-weight: 700;
`
const StyledAdditional = styled.div`
  margin-top: 5px;

  font-size: ${fontSize.body1};

  color: ${colors.grey500};
`
const StyledPrice = styled.div`
  margin-top: 20px;
`
const StyledContent = styled.div`
  margin-top: 20px;

  font-size: ${fontSize.body1};

  line-height: 1.4;
  word-break: keep-all;
`

export default ProductDetail
