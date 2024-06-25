import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import HeroSection from "./HeroSection";
import BookList from "./BookList";
import colors from "../../styles/colors";
import About from "./About";
import CategorizedBooks from "./CategorizedBooks";
import ContactUs from "./contactUs";

const SliderContainer = styled.section`
  background-color: ${colors.secondary};
  color: #ffffff;
  min-height: 100vh;
  margin: 0;
`;

const LibraryManagement = () => {
  return (
    <SliderContainer>
      <Header />
      <div id="home" style={{paddingTop:90,paddingBottom:0,paddingLeft:40,paddingRight:40}}>
        <HeroSection />
      </div>
      <div id="new-books" style={{paddingTop:0,paddingBottom:0,paddingLeft:40,paddingRight:40}}>
        <BookList />
      </div>
      <div id="about" style={{paddingTop:0,paddingBottom:0,paddingLeft:40,paddingRight:40}}>
        <About />
      </div>
      <div id="all-books" style={{paddingTop:0,paddingBottom:0,paddingLeft:40,paddingRight:40}}>
        <CategorizedBooks />
      </div>
      <div id="contact" style={{paddingTop:0,paddingBottom:0,paddingLeft:40,paddingRight:40}}>
        <ContactUs />
      </div>
    </SliderContainer>
  );
};

export default LibraryManagement;
