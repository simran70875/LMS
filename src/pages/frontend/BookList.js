import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    title: "Wicked Like a Wildfire",
    image:
      "https://m.media-amazon.com/images/I/51U2aoLx36L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Summer Bird Blue",
    image:
      "https://m.media-amazon.com/images/I/81zsCfNQY7L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "The Girl with the Dragon Tattoo",
    image:
      "https://m.media-amazon.com/images/I/81UOA8fDGaL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "Jade City",
    image:
      "https://m.media-amazon.com/images/I/913imOgCUSL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    title: "Queenie",
    image:
      "https://m.media-amazon.com/images/I/81aDPmLZVpL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    title: "Queenie",
    image:
      "https://m.media-amazon.com/images/I/81aDPmLZVpL._AC_UF1000,1000_QL80_.jpg",
  },
];

const BookList = () => {
  return (
    <BookListSection className="row">
      <div className="d-flex align-items-center justify-content-center col-md-1">
        <Heading>Recent Added Books</Heading>
      </div>
      <div className="books row col-md-11">
        {books.map((book, index) => (
          <Book className="col-md-2 align-items-center" key={book.id}>
            <BookIndex>0{index}</BookIndex>
            <BookImage src={book.image} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
          </Book>
        ))}
      </div>
    </BookListSection>
  );
};

export default BookList;
