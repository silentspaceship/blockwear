import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 20px;
  border-bottom: 2px solid #16161d;

  @media screen and (max-width: 520px) {
    height: 60px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 140px;
  padding: 15px 0;
  margin: 0 10px;
  display: flex;
  transition: filter 0.1s ease-out;

  @media screen and (max-width: 520px) {
    width: 100px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 10px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  font-family: "Moderat";
  font-weight: normal;
  font-size: 1rem;

  @media screen and (max-width: 400px) {
    font-size: 4vw;
  }

  &:hover {
    color: #f5f5f5;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #16161d;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
