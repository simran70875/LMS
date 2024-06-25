import React, { useState } from "react";
import {
  Title,
  FormRow,
  Label,
  Input,
  SuccessButton,
  CancelButton,
} from "../../styles/Inputs.Styled";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
    } else if (newPassword.length < 8 || newPassword.length > 15) {
      setError("Password must be between 8 and 15 characters.");
    } else if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      // Logic to change password
      setError("");
      alert("Password changed successfully.");
    }
  };

  return (
    <div>
      <Title>Change password</Title>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <FormRow>
        <div>
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="newPassword">New Password</Label>
          <Input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </FormRow>
    
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <SuccessButton onClick={handleChangePassword}>
          Change Password
        </SuccessButton>
        <CancelButton>Cancel</CancelButton>
      </div>
    </div>
  );
};

export default ChangePassword;
