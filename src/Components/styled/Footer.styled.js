import styled from "styled-components";

export const StyledFooter = styled.footer(
  ({ theme }) => `
display: grid;
justify-content: stretch;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;
margin-top: ${theme.containerSpacing};
padding: ${theme.containerSpacing} 0;
background-color: #F3565A;
color: white;
width: 100%;


li {
  list-style: none;
  font-size: ${theme.fonts.size.normal};
}
ul {
  padding-inline-start: 0;
}
p {
  margin-top: 45px;
}
@media (max-width: ${theme.breakpoints.small}) {
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;

  .links-1 li, .links-2 li{
    text-decoration: underline;
    text-decoration-color:  #753BBD;
    font-size: 1.5em;
    margin: 5px;
  }
  
  img {
    order: 0
  }

  .links-1 {
    order: 1;
    margin: 45px 0 0 0;
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .links-2 {
    order: 2;
    margin: 0 0 20px 0;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .contact {
    order: 3;
  }
  
  .copyright {
    order: 4;
  }
  
  ul {
    text-align: center;
    width: 100%;
  }
}

`);