import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Book,
  BookImage,
  BookIndex,
  BookListSection,
  BookTitle,
  Heading,
} from "./components/book";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/reducers/bookSlice";

// const books = [
//   {
//     id: 1,
//     title: "Wicked Like a Wildfire",
//     image:
//       "https://m.media-amazon.com/images/I/51U2aoLx36L._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     id: 2,
//     title: "Summer Bird Blue",
//     image:
//       "https://m.media-amazon.com/images/I/81zsCfNQY7L._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     id: 3,
//     title: "The Girl with the Dragon Tattoo",
//     image:
//       "https://m.media-amazon.com/images/I/81UOA8fDGaL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     id: 4,
//     title: "Jade City",
//     image:
//       "https://m.media-amazon.com/images/I/913imOgCUSL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     id: 5,
//     title: "Queenie",
//     image:
//       "https://m.media-amazon.com/images/I/81aDPmLZVpL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     id: 6,
//     title: "Queenie",
//     image:
//       "https://m.media-amazon.com/images/I/81aDPmLZVpL._AC_UF1000,1000_QL80_.jpg",
//   },
// ];

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.getBooks.books);
  console.log(books);
  const status = useSelector((state) => state.getBooks.status);
  const error = useSelector((state) => state.getBooks.error);

  useEffect(() => {
    dispatch(fetchBooks());
  },[dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  if (status === "succeeded") {
    return (
      <BookListSection className="row">
        <div className="d-flex align-items-center justify-content-center col-md-1">
          <Heading>Recent Added Books</Heading>
        </div>
        <div className="books row col-md-11 ">
          {books.map((book, index) => (
            <Book className="col-md-2 align-items-center" key={book.id}>
              <BookIndex>0{index}</BookIndex>
              <BookImage src={book.coverImage} alt={book.title} />
              <BookTitle>{book.title}</BookTitle>
              <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080",paddingRight:2 }}>
                    Auther: 
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2}}>
                    {book.authorName}
                  </BookTitle>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookTitle style={{ marginTop: 2, color: "#808080",paddingRight:2  }}>
                    Available:{" "}
                  </BookTitle>
                  <BookTitle style={{ marginTop: 2, paddingLeft: 2 }}>
                    {book.availableCopies}
                  </BookTitle>
                </div>
            </Book>
          ))}
        </div>
      </BookListSection>
    );
  }
  return <div>No Books Available</div>;
};

export default BookList;
