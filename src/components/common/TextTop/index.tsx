import styled from '@emotion/styled'
import { fontSize } from '../../../styles/typography'

const TextTop = styled.div<{ typography?: keyof typeof fontSize }>`
  padding: 50px 20px;

  font-size: ${({ typography = 'h4' }) => fontSize[typography]};
  font-weight: 700;
`

export default TextTop
