// src/styles/styles.js
import styled from "styled-components";
import colors from "../../styles/colors";

export const Hero = styled.section`
  padding: 50px;
  background-color: ${colors.secondary};
  color: #ffffff;
  position: relative;
`;

// export const HeroText = styled.div`
//   width: 70%;
// `;

export const Tagline = styled.p`
  margin: 20px 0;
  font-size: 0.9em;
  color: #bbbbbd;
  width: 70%;
  line-height: 2;
`;

export const HeadingLarge = styled.p`
  font-size: 3em;
  line-height: 1.4;
  color: #ffffff;
  font-family: "Rubik Mono One", monospace;
`;

export const Highlight = styled.span`
  color: ${colors.primary2};
`;

export const SearchBar = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const InputIcon = styled.i`
  color: #bbbbbd;
  margin-right: 10px;
  font-size: 1em;
  border: 1px solid #bbbbbd;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #bbbbbd;
  outline: none;
  background-color: transparent;
  color: #ccc;
  font-size: 0.8em;
  width: 300px;
`;
export const TextAreaInput = styled.textarea`
  padding: 10px;
  border: 1px solid #bbbbbd;
  outline: none;
  background-color: transparent;
  color: #ccc;
  font-size: 0.8em;
  width: 300px;
`;

export const HeroImage = styled.div`
  img {
    width: 65%;
    height: auto;
  }
`;
