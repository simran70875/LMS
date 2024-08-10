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
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../store/reducers/authReducer"; 

const SliderContainer = styled.section`
  background-color: ${colors.secondary};
  color: #ffffff;
  min-height: 100vh;
  margin: 0;
`;

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [msz, setMsz] = useState("");
  const dispatch = useDispatch();

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const login = async (e) => {
    console.log("formState:", formState);
    try {
      const response = await postsWithoutToken(path.login, formState);
      dispatch(
        loginSuccess({
          token: response.data.token,
          role: response.data.role,
          userid: response.data.userid,
        })
      );
      console.log("response", response.data);
      setMsz(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.log("login error", error);
      if (error.response.data.errors) {
        setMsz(error.response.data.errors.map((item) => item.msg).join(", "));
      } else {
        setMsz(error.response.data.message);
      }
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
              Welcome Back to <Highlight>Book.Com</Highlight>
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
            <div style={{ margin: "auto", display: "block", width: "50%" }}>
              <HeadingLarge style={{ fontSize: "1em" }}>Login</HeadingLarge>
              <Highlight>{msz}</Highlight>
              <SearchBar>
                <InputIcon className="fas fa-solid fa-user " />
                <FormInput
                  style={{ width: "100%" }}
                  type="text"
                  placeholder="Username or Email Address"
                  name="username"
                  value={formState.username}
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SearchBar>
                <InputIcon className="fas fa-fa-solid fa-envelope-open" />
                <FormInput
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Password"
                  value={formState.password}
                  name="password"
                  onChange={onChangeValue}
                />
              </SearchBar>
              <SuccessButton
                onClick={() => login()}
                className="mt-4"
                style={{ width: "100%", borderRadius: 0 }}
              >
                Login
              </SuccessButton>
            </div>
            <Tagline
              style={{
                marginBottom: 0,
                width: "100%",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Don't Have An Account.{" "}
              <Highlight
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/register")}
              >
                Register
              </Highlight>
            </Tagline>
          </div>
        </Hero>
      </div>
    </SliderContainer>
  );
};

export default Login;
