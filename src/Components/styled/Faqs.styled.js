import styled from "styled-components";

export const StyledFaqs = styled.div`
  margin-top: ${({ theme }) => theme.containerSpacing};
  background-color: #eee;
  padding: ${({ theme }) => theme.containerSpacing} 0;
  color: ${({ theme }) => theme.colors.textColor};
  h1 {
    text-align: center;
    margin: 0 0 2rem 0;
    font-size: ${({ theme }) => theme.fonts.size.large};
  }
  .accordion {
    max-width: 600px;
    margin: auto;
  }

`;