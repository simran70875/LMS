import React from "react";
import { SmallButton } from "../../../styles/Profile.Styled";
import "bootstrap/dist/css/bootstrap.min.css";
import colors from "../../../styles/colors";
import { useNavigate  } from "react-router-dom";
import { HeaderContainer,Logo,NavItem,NavContainer } from "../../../styles/header.style";



const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <nav className="navbar navbar-expand-lg w-100">
        <NavContainer>
          <Logo>Book.com</Logo>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i style={{ color: "#fff" }} className="fas fa-solid fa-bars"></i>
          </button>

          <div
            className="collapse navbar-collapse"
            style={{ paddingLeft: "6%" }}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavItem
                className="nav-item nav-link"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </NavItem>
              <NavItem
                className="nav-item nav-link"
                to="about"
                smooth={true}
                duration={500}
              >
                About Us
              </NavItem>
              <NavItem
                className="nav-item nav-link"
                to="new-books"
                smooth={true}
                duration={500}
              >
                New Library Books
              </NavItem>
              <NavItem
                className="nav-item nav-link"
                to="all-books"
                smooth={true}
                duration={500}
              >
                All Books
              </NavItem>
              <NavItem
                className="nav-item nav-link"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact Us
              </NavItem>
            </div>
          </div>
        </NavContainer>
        <SmallButton
          onClick={() => navigate("/login")}
          style={{ backgroundColor: colors.secondary, color: colors.primary2 }}
        >
          Login
        </SmallButton>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
