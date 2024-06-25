import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import colors from "../../styles/colors";
import { HeadingLarge, Highlight, Tagline } from "./styles";

const BookListSection = styled.section`
  padding: 70px 0;
  color: #ffffff;
  position: relative;
`;

const Heading = styled.h2`
  font-size: 1em;
  color: ${colors.primary2};
  transform: rotate(90deg);
  letter-spacing: 3px;
`;

const About = () => {
  return (
    <BookListSection className="row">
      <div className="books row col-md-11">
        <HeadingLarge style={{ fontSize: "2em" }}>
          Welcome to Book.Com!
        </HeadingLarge>
        <Tagline style={{ width: "100%" }}>
          We're passionate about books and knowledge. Our mission is to make
          learning enjoyable and accessible to everyone. Explore our diverse
          collection and join us on a journey of discovery and inspiration. With
          a passion for education and empowerment, we strive to create an
          environment where every individual can discover, engage, and grow.
          From classic literature to modern research materials, our library is a
          treasure trove of information waiting to be explored.
        </Tagline>
        <Tagline style={{ width: "100%" }}>
          Our team is committed to excellence in service, ensuring that your
          library experience is not only informative but also enjoyable. Whether
          you're a student, researcher, or avid reader, we are here to support
          your journey towards knowledge and discovery. oin us in our mission to
          cultivate a culture of lifelong learning and curiosity. Together,
          let's embark on a literary adventure that opens doors to endless
          possibilities.
        </Tagline>
      </div>
      <div className="d-flex align-items-center justify-content-center col-md-1">
        <Heading>
          About <Highlight>Us</Highlight>
        </Heading>
      </div>
    </BookListSection>
  );
};

export default About;
