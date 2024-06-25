import styled from "styled-components";
import { Link } from "react-scroll";
import colors from "./colors";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: ${colors.primary2};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  height: 80px;
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${colors.secondary};
`;

export const NavItem = styled(Link)`
  color: ${colors.secondary};
  font-size: 0.8em;
  padding: 0 24px !important;
  cursor: pointer;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
`;