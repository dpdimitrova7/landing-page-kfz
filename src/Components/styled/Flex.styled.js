import styled from "styled-components";

export const Flex = styled.div`
display: block;

@media (min-width: ${({ theme }) => theme.breakpoints.xsmall}) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ layout }) => layout || `row`};
  gap: ${({ gap }) => gap || `0`}px;
}
`
