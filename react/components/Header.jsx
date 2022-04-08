import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeChooser } from "./ThemeChooser";

export const Header = function () {
  return (
    <HeaderContainer>
      <Logo src="/uploads/logo.png" alt="Welcome to my shop" />
      <nav>
        <CustomLink $background="red" to="/">
          Home
        </CustomLink>
        <CustomLink to="user-account">User Account</CustomLink>
        <CustomLink to="contact">Contact</CustomLink>
      </nav>
      <ThemeChooser />
    </HeaderContainer>
  );
};

const CustomLink = styled(Link)`
  background-color: ${({ $background }) =>
    $background ? $background : "unset"};
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.components.textColor};

  &:hover {
    color: #1ea7fd;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  box-shadow: 0 0 1px rgba(33, 38, 46, 0.18), 0 0 2px rgba(33, 38, 46, 0.18);
`;

const Logo = styled.img`
  margin-left: 10px;
  max-width: 70px;
`;
