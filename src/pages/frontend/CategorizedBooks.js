import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import colors from "../../styles/colors";
import { HeadingLarge } from "./styles";
import {
  Book,
  BookImage,
  BookIndex,
  BookListSection,
  BookTitle,
  Heading,
} from "./components/book";

const books = [
  {
    id: 1,
    title:
      "Wicked Like a Wildfire Wicked Like a Wildfire Wicked Like a Wildfire",
    author: "John doe",
    image:
      "https://m.media-amazon.com/images/I/51U2aoLx36L._AC_UF1000,1000_QL80_.jpg",
    available: 1,
  },
  {
    id: 2,
    title: "Summer Bird Blue Wicked Like a Wildfire Wicked Like a Wildfire",
    author: "John doe",
    image:
      "https://m.media-amazon.com/images/I/81zsCfNQY7L._AC_UF1000,1000_QL80_.jpg",
    available: 23,
  },
  {
    id: 3,
    title: "The Girl with the Dragon Tattoo",
    author: "sumith",
    image:
      "https://m.media-amazon.com/images/I/81UOA8fDGaL._AC_UF1000,1000_QL80_.jpg",
    available: 3,
  },
  {
    id: 4,
    title: "Jade City",
    author: "John doe",
    image:
      "https://m.media-amazon.com/images/I/913imOgCUSL._AC_UF1000,1000_QL80_.jpg",
    available: 4,
  },
  {
    id: 5,
    title: "Queenie",
    author: "John doe",
    image:
      "https://m.media-amazon.com/images/I/81aDPmLZVpL._AC_UF1000,1000_QL80_.jpg",
    available: 5,
  },
  {
    id: 6,
    title: "Queenie",
    author: "John doe",
    image:
      "https://m.media-amazon.com/images/I/81aDPmLZVpL._AC_UF1000,1000_QL80_.jpg",
    available: 1,
  },
  {
    id: 7,
    title: "Queenie",
    author: "John doe",
    image:
      "https://m.media-amazon.com/images/I/81aDPmLZVpL._AC_UF1000,1000_QL80_.jpg",
    available: 1,
  },
];

const CategorizedBooks = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <BookListSection className="row">
      <HeadingLarge style={{ fontSize: "2em" }}>Our Library Books</HeadingLarge>
      <div className="row my-4">
        <div className="d-flex align-items-center justify-content-center col-md-1">
          <Heading>SQL</Heading>
        </div>
        <div className="books row col-md-11">
          <Slider {...settings}>
            {books.map((book, index) => (
              <Book key={book.id}>
                <BookIndex>0{index + 1}</BookIndex>
                <BookImage src={book.image} alt={book.title} />
                <BookTitle style={{ paddingRight: 10, paddingLeft: 10 }}>
                  {book.title}
                </BookTitle>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Auther:
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.author}
                  </BookTitle>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Available:{" "}
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.available}
                  </BookTitle>
                </div>
              </Book>
            ))}
          </Slider>
        </div>
      </div>
      <div className="row my-4">
        <div className="d-flex align-items-center justify-content-center col-md-1">
          <Heading>Java</Heading>
        </div>
        <div className="books row col-md-11">
          <Slider {...settings}>
            {books.map((book, index) => (
              <Book key={book.id}>
                <BookIndex>0{index + 1}</BookIndex>
                <BookImage src={book.image} alt={book.title} />
                <BookTitle style={{ paddingRight: 10, paddingLeft: 10 }}>
                  {book.title}
                </BookTitle>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Auther:
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.author}
                  </BookTitle>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Available:{" "}
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.available}
                  </BookTitle>
                </div>
              </Book>
            ))}
          </Slider>
        </div>
      </div>
      <div className="row my-4">
        <div className="d-flex align-items-center justify-content-center col-md-1">
          <Heading>History</Heading>
        </div>
        <div className="books row col-md-11">
          <Slider {...settings}>
            {books.map((book, index) => (
              <Book key={book.id}>
                <BookIndex>0{index + 1}</BookIndex>
                <BookImage src={book.image} alt={book.title} />
                <BookTitle style={{ paddingRight: 10, paddingLeft: 10 }}>
                  {book.title}
                </BookTitle>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Auther:
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.author}
                  </BookTitle>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Available:{" "}
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.available}
                  </BookTitle>
                </div>
              </Book>
            ))}
          </Slider>
        </div>
      </div>
      <div className="row my-4">
        <div className="d-flex align-items-center justify-content-center col-md-1">
          <Heading>Religion</Heading>
        </div>
        <div className="books row col-md-11">
          <Slider {...settings}>
            {books.map((book, index) => (
              <Book key={book.id}>
                <BookIndex>0{index + 1}</BookIndex>
                <BookImage src={book.image} alt={book.title} />
                <BookTitle style={{ paddingRight: 10, paddingLeft: 10 }}>
                  {book.title}
                </BookTitle>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Auther:
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.author}
                  </BookTitle>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Available:{" "}
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.available}
                  </BookTitle>
                </div>
              </Book>
            ))}
          </Slider>
        </div>
      </div>
      <div className="row my-4">
        <div className="d-flex align-items-center justify-content-center col-md-1">
          <Heading>Maths</Heading>
        </div>
        <div className="books row col-md-11">
          <Slider {...settings}>
            {books.map((book, index) => (
              <Book key={book.id}>
                <BookIndex>0{index + 1}</BookIndex>
                <BookImage src={book.image} alt={book.title} />
                <BookTitle style={{ paddingRight: 10, paddingLeft: 10 }}>
                  {book.title}
                </BookTitle>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Auther:
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.author}
                  </BookTitle>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080" }}>
                    Available:{" "}
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.available}
                  </BookTitle>
                </div>
              </Book>
            ))}
          </Slider>
        </div>
      </div>
    </BookListSection>
  );
};

const Arrow = styled.div`
  display: block;
  background: ${colors.primary2};
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
`;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, right: "-10px" }}
      onClick={onClick}
    >
      &gt;
    </Arrow>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, left: "-20px" }}
      onClick={onClick}
    >
      &lt;
    </Arrow>
  );
};

export default CategorizedBooks;
