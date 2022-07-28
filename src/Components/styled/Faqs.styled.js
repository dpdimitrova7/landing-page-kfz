import styled from "styled-components";

export const StyledFaqs = styled.div(
  ({ theme }) => `
  margin-top: ${theme.containerSpacing};
  background-color: #eee;
  padding: ${theme.containerSpacing} 0;
  color: ${theme.colors.textColor};
  h1 {
    text-align: center;
    margin: 0 0 2rem 0;
    font-size: ${theme.fonts.size.large};
  }
  .accordion {
    max-width: 600px;
    margin: auto;
  }
`);