import styled from '@emotion/styled'
import React from 'react'
import colors from '../../../styles/palette'
import { fontSize } from '../../../styles/typography'

const BottomCTAButton = ({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) => (
  <StyledContainer onClick={() => onClick && onClick()}>
    <StyledButton>{children}</StyledButton>
  </StyledContainer>
)

const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  padding: 20px;
`
const StyledButton = styled.button`
  width: 100%;

  padding: 15px;

  font-size: ${fontSize.body1};
  font-weight: 600;

  color: white;
  background-color: ${colors.blue500};

  border: none;
  border-radius: 20px;
`

export default BottomCTAButton
