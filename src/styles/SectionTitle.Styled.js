import colors from "./colors";
import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 15px;
  color: ${colors.secondary};
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 13px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.textPrimary};
  }
`;

export const ActionButton = styled.button`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  color: ${colors.secondary};
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.textPrimary};
  }
`;
