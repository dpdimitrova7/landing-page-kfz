import React from 'react';
import { StyledFooter } from "./styled/Footer.styled";
import { Logo } from "./styled/Header.styled";

export default function Footer({ content }) {
  return (
    <StyledFooter>
      <Logo src={content.header.logo} alt='' />
      <ul className="contact">
        <li>
          Contact us at:
        </li>
        <li>+1-543-123-4567</li>
        <li>example@huddle.com</li>
      </ul>
      <ul className="links-1">
        <li>About Us</li>
        <li>What We Do</li>
        <li>FAQ</li>
      </ul>
      <ul className="links-2">
        <li>Career</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>

      {/* <SocialIcons /> */}
      <p className="copyright">&copy; 2021 Huddle. All rights reserved</p>
    </StyledFooter>
  )
};
