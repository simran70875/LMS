import React, { useState } from "react";
import {
  CancelButton,
  SuccessButton,
  CheckoutContainer,
  FormRow,
  Input,
  Label,
  Title,
} from "../../styles/Inputs.Styled";

const Checkout = () => {
  const [bookId, setBookId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [category, setCategory] = useState("");
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberContact, setMemberContact] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleCheckout = () => {
    // Handle checkout logic
  };

  const handleCancel = () => {
    // Handle cancel logic
  };

  return (
    <div>
      <CheckoutContainer>
        <Title>Issue Book</Title>
        <FormRow>
          <div>
            <Label htmlFor="bookId">Book ID</Label>
            <Input
              id="bookId"
              type="text"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
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
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="memberId">Member ID</Label>
            <Input
              id="memberId"
              type="text"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="memberName">Member Name</Label>
            <Input
              id="memberName"
              type="text"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="memberContact">Member Contact</Label>
            <Input
              id="memberContact"
              type="text"
              value={memberContact}
              onChange={(e) => setMemberContact(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="checkoutDate">Checkout Date</Label>
            <Input
              id="checkoutDate"
              type="date"
              value={checkoutDate}
              onChange={(e) => setCheckoutDate(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div></div>
        </FormRow>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <SuccessButton onClick={handleCheckout}>Issue</SuccessButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </div>
      </CheckoutContainer>
    </div>
  );
};

export default Checkout;
