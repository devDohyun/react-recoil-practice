import styled from '@emotion/styled'
import colors from '../../../styles/palette'
import { fontSize } from '../../../styles/typography'

const ProductItem = () => {
  return (
    <StyledContainer>
      <StyledThumb src="/product-1.png" />
      <StyledText>
        <StyledName>애플 워치</StyledName>
        <StyledAdditional>재고 5개 남음 · 2022/11/06 배송</StyledAdditional>
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

export default ProductItem
