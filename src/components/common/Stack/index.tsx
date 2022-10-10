import styled from '@emotion/styled'

type TStack = Partial<Pick<CSSStyleDeclaration, 'justifyContent' | 'alignContent' | 'marginBottom'>>

const Stack = styled.div<TStack>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
  align-items: ${({ alignContent }) => alignContent ?? 'center'};

  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
`

export default Stack
