import styled from '@emotion/styled'

type TStack = Partial<Pick<CSSStyleDeclaration, 'justifyContent' | 'alignContent' | 'marginBottom' | 'height'>>

const Stack = styled.div<TStack>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
  align-items: ${({ alignContent }) => alignContent ?? 'center'};

  height: ${({ height }) => height ?? 'auto'};

  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
`

export default Stack
