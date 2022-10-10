import styled from '@emotion/styled'
import useRouter from '../../hooks/useRouter'
import colors from '../../styles/palette'
import { fontSize } from '../../styles/typography'
import BottomCTAButton from '../common/BottomCTAButton'

const ProductDetail = () => {
  const router = useRouter()

  return (
    <StyledContainer>
      <StyledImage src="/product-1.png" alt="product" />
      <StyledArticle>
        <StyledName>Apple watch</StyledName>
        <StyledAdditional>재고 5개 남음 · 2022/11/06 배송</StyledAdditional>
        <StyledPrice>₩ 599,000부터</StyledPrice>
        <StyledContent>
          Atoms는 상태의 단위이며, 업데이트와 구독이 가능하다.
          <br />
          atom이 업데이트되면 각각의 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링 된다.
          <br />
          atoms는 런타임에서 생성될 수도 있다.
          <br />
          Atoms는 React의 로컬 컴포넌트의 상태 대신 사용할 수 있다.
          <br />
          동일한 atom이 여러 컴포넌트에서 사용되는 경우 모든 컴포넌트는 상태를 공유한다.
          <br />
          <br />
          Atoms는 atom함수를 사용해 생성한다.
          <br />
          <br />
          Atoms는 디버깅, 지속성 및 모든 atoms의 map을 볼 수 있는 특정 고급 API에 사용되는 고유한 키가 필요하다. 두개의 atom이 같은 키를 갖는 것은 오류이기 때문에 키값은 전역적으로 고유하도록 해야한다. React 컴포넌트의 상태처럼 기본값도 가진다.
          <br />
          <br />
          컴포넌트에서 atom을 읽고 쓰려면 useRecoilState라는 훅을 사용한다. React의 useState와 비슷하지만 상태가 컴포넌트 간에 공유될 수 있다는 차이가 있다.
        </StyledContent>
      </StyledArticle>
      <BottomCTAButton onClick={() => router.push('/purchase')}>구매하기</BottomCTAButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  padding-bottom: 100px;
`

const StyledImage = styled.img`
  width: 100%;
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
