import styled from "styled-components";
import logo from "../.././Images/img1.jpg"


export const StyledCard = styled.div`
  background-image: url(${logo});
  display: flex;
  flex-direction: column;
  max-width: 20.75em;
  overflow: hidden;
  min-height: auto;
  border-radius: .5em;
  text-decoration: none;
  background: white;
  margin: 1em;
  padding: ${({ smallPadding }) => smallPadding ? `2.75em 1em` : `2.75em 2.5em`};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform .45s ease, background .45s ease;
  max-height: ${({ heightOption }) => heightOption && `500px`};


  a {
    color: #753BBD;
  }

  h3 {
    color: #2E3C40;
    font-size: 2.6em;
    font-weight: 600;
    line-height: 1;
    padding-bottom: .5em;
    margin: 0 0 0.142857143em;
    border-bottom: 2px solid #753BBD;
    transition: color .45s ease, border .45s ease;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    ${({ heightOption }) => heightOption && `max-height: 300px`};
    padding: 2.75em 2.5em;  
    min-height: 300px;

    h3 {
      font-size: 3.5em;
    }
  }
  h4 {
    color: #2E3C40;
    text-transform: uppercase;
    font-size: 1.125em;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.1em;
    margin: 0 0 1.777777778em;
    transition: color .45s ease;
  }

  p {
    font-weight: 600;
    line-height: 1.8;
    margin: 0 0 1.25em;
    transform: translateY(-1em);
    transition: opacity .45s ease, transform .5s ease;
    color: #2E3C40
  }

  .link-text {
    display: block;
    color: #753BBD;
    font-size: 1.125em;
    font-weight: 600;
    line-height: 1.2;
    margin: auto 0 0;
    transition: color .45s ease;

    svg {
      margin-left: .5em;
      transition: transform .6s ease;
      
      path {
        transition: fill .45s ease;
      }
    }
  }

  img {
    width: 50px;
    border-radius: 50%;
  }

  .name {
    margin: 0 !important;
  }

  .wrapper {
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translateY(-10px);
  }

  &:hover {
    background: ${({ hoverColor }) => hoverColor || '#F3565A'};
    transform: scale(1.02);
    
    h3 {
      color: #FFFFFF;
      border-bottom-color: #A754C4;
    }

    h4 {
      color: #F35659;
      text-decoration: underline;
    }

    p {
      opacity: 1;
      transform: none;
    }

    .link-text {
      color: #FFFFFF;

      svg {
        animation: point 1.25s infinite alternate;
        
        path {
          fill: #FFFFFF;
        }
      }
    }
  }
  }

  @keyframes point {
    0% {
    transform: translateX(0);
    }
    100% {
      transform: translateX(.25em);
    }
  }
`