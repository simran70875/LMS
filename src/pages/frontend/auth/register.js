import React, { useState } from "react";
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
import path from "../../../config/paths";
import { postsWithoutToken } from "../../../services/post";

const SliderContainer = styled.section`
  background-color: ${colors.secondary};
  color: #ffffff;
  min-height: 100vh;
  margin: 0;
`;

const Register = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    role: "student",
    username: "",
    phone: 0,
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    address: "",
    course: "",
    courseYears: 0,
  });
  const [msz, setMsz] = useState("");

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    console.log("formState:", formState);
    try {
      const response = await postsWithoutToken(path.register, formState);
      setMsz(response.data.message);
      console.log("response", response);
    } catch (error) {
      console.log("register error", error.response.data.message);
      setMsz(error.response.data.message);
    }
  };

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
            <form className="row" onSubmit={register}>
              <HeadingLarge style={{ fontSize: "1em" }}>Register</HeadingLarge>
              <Highlight>{msz}</Highlight>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-solid fa-user " />
                <FormInput
                  required
                  style={{ width: "100%" }}
                  type="text"
                  name="username"
                  placeholder="Student Name"
                  value={formState.username}
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-solid fa-phone" />
                <FormInput
                  required
                  type="number"
                  name="phone"
                  style={{ width: "100%" }}
                  placeholder="Mobile No."
                  value={formState.phone}
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-solid fa-envelope-open" />
                <FormInput
                  required
                  type="text"
                  style={{ width: "100%" }}
                  name="email"
                  placeholder="Email Id"
                  value={formState.email}
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-solid fa-map" />
                <FormInput
                  type="text"
                  style={{ width: "100%" }}
                  name="address"
                  placeholder="Address"
                  value={formState.address}
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-solid fa-school" />
                <FormInput
                  type="text"
                  style={{ width: "100%" }}
                  name="course"
                  placeholder="Course"
                  value={formState.course}
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-solid fa-school" />
                <FormInput
                  type="number"
                  name="courseYears"
                  style={{ width: "100%" }}
                  placeholder="Course Year"
                  value={formState.courseYears}
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-solid fa-lock" />
                <FormInput
                  required
                  type="password"
                  style={{ width: "100%" }}
                  name="password"
                  placeholder="Password"
                  value={formState.password}
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SearchBar className="col-md-6">
                <InputIcon className="fas fa-solid fa-lock" />
                <FormInput
                  required
                  type="text"
                  style={{ width: "100%" }}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formState.confirmPassword}
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SuccessButton
                type="submit"
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
