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
  Textarea,
} from "../../styles/Inputs.Styled";

const AddNewUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseYear, setCourseYear] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [role, setRole] = useState("");
  const [notes, setNotes] = useState("");


  const handleAddUser = () => {
    // Handle add user logic
  };

  const handleCancel = () => {
    // Handle cancel logic
  };

  return (
    <div>
      <ReturnContainer>
        <Title>Add New User</Title>
        <FormRow>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="courseName">Course Name</Label>
            <Select
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            >
              <option value="">Select Course Name</option>
              {/* Add course options here */}
            </Select>
          </div>
          <div>
            <Label htmlFor="courseYear">Course Year</Label>
            <Select
              id="courseYear"
              value={courseYear}
              onChange={(e) => setCourseYear(e.target.value)}
            >
              <option value="">Select Course Year</option>
              {/* Add course year options here */}
            </Select>
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select State</option>
              {/* Add state options here */}
            </Select>
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="zip">Zip Code</Label>
            <Input
              id="zip"
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="profilePicture">Profile Picture</Label>
            <Input id="profilePicture" type="file" />
          </div>
        </FormRow>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <SuccessButton onClick={handleAddUser}>Add User</SuccessButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </div>
      </ReturnContainer>
    </div>
  );
};

export default AddNewUser;
