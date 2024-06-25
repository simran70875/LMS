import React, { useState } from "react";
import {
  FormRow,
  Label,
  Input,
  Select,
  SuccessButton,
  CancelButton,
  Title,
} from "../../styles/Inputs.Styled";
import { CardContainer, Container } from "../../styles/containers.styled";
import { Button, SectionTitle } from "../../styles/SectionTitle.Styled";

const UpdateProfile = () => {
  // const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleUpdateProfile = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !city ||
      !state ||
      !zip ||
      !address
    ) {
      setError("Please fill in all fields.");
    } else {
      // Logic to update profile
      setError("");
      alert("Profile updated successfully.");
    }
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <SectionTitle>Profile</SectionTitle>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button>Change Password</Button>
        </div>
      </div>
      <CardContainer>
        <Title>Update Profile</Title>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <FormRow>
          <div>
            <Label htmlFor="profileImage">Profile Image</Label>
            <Input
              id="profileImage"
              type="file"
            
            />
          </div>
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
        </FormRow>
        <FormRow>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </FormRow>
        <FormRow>
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
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </FormRow>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <SuccessButton onClick={handleUpdateProfile}>
            Update Profile
          </SuccessButton>
          <CancelButton>Cancel</CancelButton>
        </div>
      </CardContainer>
  
    </Container>
  );
};

export default UpdateProfile;
