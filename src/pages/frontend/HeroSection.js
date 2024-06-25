// src/HeroSection.js
import React from "react";

import {
  Hero,
  Tagline,
  HeadingLarge,
  Highlight,
  SearchBar,
  InputIcon,
  FormInput,
  HeroImage,
} from "./styles";
import bannerImg from "../../images/5.png";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <Hero className="row">
      <div className="col-md-8">
        <Tagline>Best way to learn from anywhere</Tagline>
        <HeadingLarge>
          Find the <Highlight>book</Highlight> you're looking for easier to
          <br />
          read.
        </HeadingLarge>
        <Tagline>
          A global knowledge platform and marketplace for educators! Delivering
          engaging learning to billions.
        </Tagline>
        <SearchBar>
          <InputIcon className="fas fa-search" />
          <FormInput type="text" placeholder="Find your favourite book" />
        </SearchBar>
      </div>

      <HeroImage className="col-4">
        <img src={bannerImg} alt="Person with laptop" />
      </HeroImage>
    </Hero>
  );
};

export default HeroSection;
