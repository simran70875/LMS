import React from "react";
import styled from "styled-components";
import { Heading } from "./components/book";
import {
  HeadingLarge,
  Highlight,
  SearchBar,
  InputIcon,
  FormInput,
  TextAreaInput,
} from "./styles";
import { SuccessButton } from "../../styles/Inputs.Styled";

const ContactSection = styled.section`
  padding: 70px 0;
  color: #ffffff;
  position: relative;
`;

const ContactUs = () => {
  return (
    <ContactSection className="row">
      <div className="books row col-md-11">
        <HeadingLarge style={{ fontSize: "2em" }}>
          Get in Touch with us
        </HeadingLarge>
        <div className="row mt-3">
          <div className="col-md-7">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ borderRadius: 10 }}
            ></iframe>
          </div>
          <form className="col-md-5 m-0">
            <SearchBar style={{ width: "100%" }}>
              <InputIcon className="fas fa-solid fa-user " />
              <FormInput
                style={{ width: "100%" }}
                type="text"
                placeholder="Your name"
              />
            </SearchBar>
            <SearchBar style={{ width: "100%" }}>
              <InputIcon className="fas fa-fa-solid fa-envelope-open" />
              <FormInput
                style={{ width: "100%" }}
                type="text"
                placeholder="Email Address"
              />
            </SearchBar>
            <SearchBar style={{ width: "100%" }}>
              <InputIcon className="fas fa-solid fa-phone" />
              <FormInput
                style={{ width: "100%" }}
                type="text"
                placeholder="Mobile No."
              />
            </SearchBar>
            <SearchBar style={{ width: "100%" }}>
              <InputIcon className="fas fa-solid fa-address-book" />
              <TextAreaInput
                style={{ width: "100%" }}
                className="textareaFrontend"
                type="text"
                placeholder="Type Message..."
              />
            </SearchBar>
            <SuccessButton className="my-4">Submit</SuccessButton>
          </form>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center col-md-1">
        <Heading>
          Contact <Highlight>Us</Highlight>
        </Heading>
      </div>
    </ContactSection>
  );
};

export default ContactUs;
