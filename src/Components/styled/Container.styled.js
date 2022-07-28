import styled from 'styled-components';

export const Container = styled.div(
  ({ theme }) => `
  padding: 0 20px;
  margin: 0 auto;
  max-width: 90%;
  @media (min-width: ${theme.breakpoints.medium}) {
    width: ${theme.maxWidth}px;
    max-width: auto;
  }

`)