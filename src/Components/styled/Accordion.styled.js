import styled from "styled-components";

export const StyledAccordion = styled.div`
margin: 0;
.accordion-title {
  text-decoration: underline;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.size.normal};
}

a {
  color: #753BBD;
}

h3 {
  color: #2E3C40;
}
`