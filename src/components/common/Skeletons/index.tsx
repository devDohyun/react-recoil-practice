import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import colors from '../../../styles/palette'

type TStyledSkeleton = Partial<Pick<CSSStyleDeclaration, 'width' | 'height' | 'marginBottom' | 'marginRight'>>

const Animation = keyframes`
  0% {
    left: 0;
  }
  50%, 100% {
    left: 100%;
  }
`

const StyledSkeleton = styled.div<TStyledSkeleton>`
  position: relative;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${colors.grey100};

  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
  margin-right: ${({ marginRight }) => marginRight ?? '0'};

  overflow: hidden;

  &::before {
    content: ' ';

    position: absolute;
    left: 0;
    top: 0;

    display: block;

    width: 50px;
    height: 100%;

    background-image: linear-gradient(to right, ${colors.grey100}, ${colors.grey50}, ${colors.grey100});

    animation-name: ${Animation};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
`

export const SkeletonSquare = StyledSkeleton
