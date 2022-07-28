import React, { useRef, useEffect } from 'react';
import { FiChevronDown } from "react-icons/fi";
import { IconContext } from "react-icons";
import { StyledHeader, Nav, Logo, StyledDescription, BackgroundMask } from "./styled/Header.styled";
import { Container } from './styled/Container.styled';
import { Button } from './styled/Button.styled';
import BgVideo from ".././Images/kf.mp4";

export default function Header({ content, onClick }) {
  const { button1, button2, description, logo } = content.header;

  return (
    <StyledHeader>
      <BackgroundMask />
      <IconContext.Provider
        value={{ color: 'white', size: '50px' }}
      >
        <div style={{ position: "absolute", bottom: "0", cursor: "pointer" }}>
          <FiChevronDown onClick={onClick} />
        </div>
      </IconContext.Provider>
      <video src={BgVideo} loop={true} muted={true} autoPlay={true} playsInline={true} className="video-bg" />
      <Container className="header-container">
        <Nav>
          <Logo src={logo} />
          <Button>{button1}</Button>
        </Nav>
        <StyledDescription>
          <p>{description}</p>
          <Button transparentBg>
            {button2}
          </Button>
        </StyledDescription>
      </Container>
    </StyledHeader >
  )
};
