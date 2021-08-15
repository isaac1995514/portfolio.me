import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  HeaderContainer,
  PortfolioNameWrapper,
  NavLinksWrapper,
  SocialIconsWrapper,
  NavLink,
  SocialIcons,
  PortfolioHomeWrapper,
  HomeLinkWrapper,
} from "./HeaderStyles";

const navLinks = [
  {
    href: "#projects",
    name: "Projects",
  },
  {
    href: "#tech",
    name: "Technologies",
  },
  {
    href: "#about",
    name: "About",
  },
];

const socialIcons = [
  {
    href: "https://github.com",
    socialIcon: <AiFillGithub size="3rem" />,
  },
  {
    href: "https://www.linkedin.com/in/ikhl0514",
    socialIcon: <AiFillLinkedin size="3rem" />,
  },
  {
    href: "https://instagram.com",
    socialIcon: <AiFillInstagram size="3rem" />,
  },
];

const Header = () => (
  <HeaderContainer>
    <PortfolioHomeWrapper>
      <Link href="/">
        <HomeLinkWrapper>
          <DiCssdeck /> <PortfolioNameWrapper>Portfolio</PortfolioNameWrapper>
        </HomeLinkWrapper>
      </Link>
    </PortfolioHomeWrapper>
    <NavLinksWrapper>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>
            <NavLink>{link.name}</NavLink>
          </Link>
        </li>
      ))}
    </NavLinksWrapper>
    <SocialIconsWrapper>
      {socialIcons.map((icon) => (
        <SocialIcons href={icon.href} target="_blank">
          {icon.socialIcon}
        </SocialIcons>
      ))}
    </SocialIconsWrapper>
  </HeaderContainer>
);

export default Header;
