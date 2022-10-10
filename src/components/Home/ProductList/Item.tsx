import styled from '@emotion/styled'
import colors from '../../../styles/palette'
import { fontSize } from '../../../styles/typography'
import { TProduct } from '../../../types'

const ProductListItem = ({ item }: { item: TProduct }) => {
  const shippingDate = new Date(item.shipping).toLocaleDateString('ko')

  return (
    <StyledContainer>
      <StyledThumb src={item.img} />
      <StyledText>
        <StyledName>{item.name}</StyledName>
        <StyledAdditional>
          재고 {item.stock}개 남음 · {shippingDate} 배송
        </StyledAdditional>
      </StyledText>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 20px;
`
const StyledThumb = styled.img`
  width: 75px;
  height: 75px;

  object-fit: contain;
`
const StyledText = styled.div`
  margin-left: 5px;
`
const StyledName = styled.div`
  font-size: ${fontSize.body1};
  font-weight: 600;
`
const StyledAdditional = styled.div`
  margin-top: 5px;

  font-size: ${fontSize.body2};

  color: ${colors.grey500};
`

export default ProductListItem
