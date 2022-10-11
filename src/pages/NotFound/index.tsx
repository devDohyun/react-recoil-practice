import styled from '@emotion/styled'
import BottomCTAButton from '../../components/common/BottomCTAButton'
import Stack from '../../components/common/Stack'
import useRouter from '../../hooks/useRouter'
import { fontSize } from '../../styles/typography'

const PageNotFound = () => {
  const router = useRouter()

  return (
    <>
      <Stack height="100%">
        <div>
          <StyledTitle>404</StyledTitle>
          <StyledSubtitle>Not found.</StyledSubtitle>
        </div>
      </Stack>
      <BottomCTAButton onClick={() => router.repalce('/')}>메인으로 가기</BottomCTAButton>
    </>
  )
}

const StyledTitle = styled.div`
  text-align: center;
  font-size: ${fontSize.h3};
  font-weight: 700;
`
const StyledSubtitle = styled.div`
  margin-top: 5px;

  text-align: center;
  font-size: ${fontSize.body1};
`

export default PageNotFound
