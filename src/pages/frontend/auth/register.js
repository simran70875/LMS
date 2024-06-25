import React from "react";
import styled from "styled-components";
import {
  Hero,
  Tagline,
  HeadingLarge,
  Highlight,
  SearchBar,
  InputIcon,
  FormInput,
} from "../styles";
import colors from "../../../styles/colors";
import { SuccessButton } from "../../../styles/Inputs.Styled";
import {
  HeaderContainer,
  Logo,
  NavContainer,
} from "../../../styles/header.style";
import { SmallButton } from "../../../styles/Profile.Styled";
import { useNavigate } from "react-router-dom";

const SliderContainer = styled.section`
  background-color: ${colors.secondary};
  color: #ffffff;
  min-height: 100vh;
  margin: 0;
`;

const Register = () => {
  const navigate = useNavigate();
  return (
    <SliderContainer>
      <HeaderContainer>
        <nav className="navbar navbar-expand-lg w-100">
          <NavContainer>
            <Logo>Book.com</Logo>
          </NavContainer>
          <SmallButton
            onClick={() => navigate("/")}
            style={{
              backgroundColor: colors.secondary,
              color: colors.primary2,
            }}
          >
            Home
          </SmallButton>
        </nav>
      </HeaderContainer>
      <div
        style={{
          paddingTop: 90,
          paddingBottom: 0,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <Hero className="row align-items-center">
          <div className="col-md-5">
            <Tagline>Best way to learn from anywhere</Tagline>
            <HeadingLarge>
              Welcome to <Highlight>Book.Com</Highlight>
            </HeadingLarge>
            <Tagline style={{ width: "100%" }}>
              A global knowledge platform and marketplace for educators!
              Delivering engaging learning to billions.
            </Tagline>
          </div>
          <div
            className="col-md-7"
            style={{
              backgroundColor: "#1e1e1e",
              padding: 60,
              borderRadius: 10,
            }}
          >
            <form className="row">
              <HeadingLarge style={{ fontSize: "1em" }}>Register</HeadingLarge>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-solid fa-user " />
                <FormInput
                  style={{ width: "100%" }}
                  type="text"
                  placeholder="Mobile Number"
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-fa-solid fa-envelope-open" />
                <FormInput
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Student Name"
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-fa-solid fa-envelope-open" />
                <FormInput
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Student Email Id"
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-fa-solid fa-envelope-open" />
                <FormInput
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Password"
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-fa-solid fa-envelope-open" />
                <FormInput
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Confirm Password"
                />
              </SearchBar>
              <SuccessButton
                className="mt-4"
                style={{ width: "100%", borderRadius: 0 }}
              >
                Register
              </SuccessButton>
            </form>
            <Tagline
              style={{
                marginBottom: 0,
                width: "100%",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Do you have an account.{" "}
              <Highlight
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Highlight>
            </Tagline>
          </div>
        </Hero>
      </div>
    </SliderContainer>
  );
};

export default Register;
