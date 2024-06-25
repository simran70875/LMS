import React, { useState } from "react";
import {
  CancelButton,
  SuccessButton,
  ReturnContainer,
  FormRow,
  Input,
  Label,
  Title,
} from "../../styles/Inputs.Styled";

const AddBook = () => {
  const [isbn, setIsbn] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [googleBookUrl, setGoogleBookUrl] = useState("");
  // const [bookImg, setBookImg] = useState(null);
  // const [pdf, setPdf] = useState(null);
  const [externalUrl, setExternalUrl] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [bookDesc, setBookDesc] = useState("");

  const handleAddBook = () => {
    // Handle add book logic
  };

  const handleCancel = () => {
    // Handle cancel logic
  };

  return (
    <div>
      <ReturnContainer>
        <Title>Add New Book</Title>
        <FormRow>
          <div>
            <Label htmlFor="isbn">ISBN</Label>
            <Input
              id="isbn"
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="authorName">Author Name</Label>
            <Input
              id="authorName"
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="bookTitle">Book Title</Label>
            <Input
              id="bookTitle"
              type="text"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="publisher">Publisher</Label>
            <Input
              id="publisher"
              type="text"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="googleBookUrl">Google Book URL</Label>
            <Input
              id="googleBookUrl"
              type="text"
              value={googleBookUrl}
              onChange={(e) => setGoogleBookUrl(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="bookImg">Upload Book Image</Label>
            <Input
              id="bookImg"
              type="file"
              // onChange={(e) => setBookImg(e.target.files[0])}
            />
          </div>
          <div>
            <Label htmlFor="pdf">Upload PDF</Label>
            <Input
              id="pdf"
              type="file"
              // onChange={(e) => setPdf(e.target.files[0])}
            />
          </div>
          <div>
            <Label htmlFor="externalUrl">External URL</Label>
            <Input
              id="externalUrl"
              type="text"
              value={externalUrl}
              onChange={(e) => setExternalUrl(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="bookDesc">Book Description</Label>
            <Input
              id="bookDesc"
              type="text"
              value={bookDesc}
              onChange={(e) => setBookDesc(e.target.value)}
            />
          </div>
        </FormRow>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <SuccessButton onClick={handleAddBook}>Add Book</SuccessButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </div>
      </ReturnContainer>
    </div>
  );
};

export default AddBook;
