import React, { useState } from "react";
import {
  CancelButton,
  SuccessButton,
  ReturnContainer,
  FormRow,
  Input,
  Label,
  Title,
  Select,
} from "../../styles/Inputs.Styled";

const Return = () => {
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [condition, setCondition] = useState("");
  const [fines, setFines] = useState("");

  const handleReturn = () => {
    // Handle return logic
  };

  const handleCancel = () => {
    // Handle cancel logic
  };

  return (
    <div>
      <ReturnContainer>
        <Title>Return Book</Title>
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
            <Label htmlFor="memberId">Member ID</Label>
            <Input
              id="memberId"
              type="text"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="returnDate">Return Date</Label>
            <Input
              id="returnDate"
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="status">Condition</Label>
            <Select
              id="status"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="">Select Condition</option>
              <option value="Returned">Good</option>
              <option value="Pending">Okay</option>
              <option value="Pending">Bad</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="fines">Fines</Label>
            <Input
              id="fines"
              type="number"
              value={fines}
              onChange={(e) => setFines(e.target.value)}
            />
          </div>
          <div></div>
        </FormRow>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <SuccessButton onClick={handleReturn}>Return</SuccessButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </div>
      </ReturnContainer>
    </div>
  );
};

export default Return;
