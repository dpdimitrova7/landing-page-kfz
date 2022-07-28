import styled from "styled-components";

export const StyledSubscribe = styled.form`
  margin-top: ${({ theme }) => theme.containerSpacing};
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform .45s ease, background .45s ease;
  padding: 20px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 70%;
    padding: 0 5em 5em 5em;
  }

.title {
  color: #2E3C40;
  font-size: 3em;
  font-weight: 900;
  margin-top: 30px;
  text-align: center;
}

.subtitle {
  color: #2E3C40;
  font-size: 16px;
  font-weight: 900;
  margin-top: 10px;
  text-align: center;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 20px;
}

.ic2 {
  margin-top: 20px;
}

.input {
  background-color: #eee;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #15172b;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.submit {
  background-color: ${({ theme }) => theme.colors.highlight};
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 20px;
  // outline: 0;
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: #A754C4;
}
`