import styled from "styled-components";

export const StyledDescription = styled.div(
  ({ theme }) => `
    margin: 0 auto;
    font-size: ${theme.fonts.size.bigger};
    color: #fff;
    padding-top: 30px;

    p {
      max-width: 500px;
    }

    img {
      width: 100%;
      border-radius: 20px;
    }
    
    @media (min-width: ${theme.breakpoints.small}) {
      width: ${theme.maxWidth}px;
      padding-top: 45px;
      img {
        width: 500px;
        border-radius: 10px;
      }
    }
  `)