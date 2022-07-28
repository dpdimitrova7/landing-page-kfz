import styled from "styled-components";

export const StyledHeader = styled.header`
height: 100vh;
overflow: hidden;
display: flex;
flex-direction: column;
position: relative;
align-items: center;

.header-container {
  display: flex;
  flex-direction: column;
  height:100%;
}
`

export const BackgroundMask = styled.div`
background: rgb(158,24,20);
background: linear-gradient(0deg, rgba(158,24,20,1) 0%, rgba(101,101,101,1) 100%);
height: 100vh;
width: 100%;
opacity: 0.6;
position: absolute;`

export const Logo = styled.img`
width: 140px;
z-index: 1;

@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
  width: 160px;
}
`

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`

export const StyledDescription = styled.div`
max-width: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;

p {
  padding-bottom: 2rem;
  z-index: 1;
  color: white;
  font-size: ${({ theme }) => theme.fonts.size.medium};
}
`