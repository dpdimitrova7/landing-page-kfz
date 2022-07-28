import styled from "styled-components";


export const Background = styled.div`
background-color: ${({ bgColor }) => bgColor || `white`};
margin-top: ${({ theme }) => theme.containerSpacing};

`