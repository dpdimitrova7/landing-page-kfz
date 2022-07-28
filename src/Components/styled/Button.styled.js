import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${props => props.transparentBg ? `transparent` : `#fff`};
  border-radius: 24px;
  border: 3px solid #fff;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: ${props => props.transparentBg ? `#fff` : `#3c4043`};
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}

&:hover {
  background: #753BBD;
  color: #fff;
  border: 3px solid #753BBD;
}

&:active {
  box-shadow: ${({ theme }) => theme.shadow};
  outline: none;
}

&:focus {
  outline: none;
  border: 2px solid #4285f4;
}
`

