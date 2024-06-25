import styled from "styled-components";
import colors from "./colors";

export const ProfileSection = styled.div`
  padding: 20px;
  background-color: ${colors.secondary};
  display: flex;
  align-items: center;
  border-top: 1px solid ${colors.hoverBackground};
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 13px;
`;

export const ProfileInfo = styled.div`
  flex-grow: 1;
`;

export const ProfileName = styled.div`
  color: ${colors.textPrimary};
  font-weight: 600;
  font-size: 14px;
`;

export const ProfileDesignation = styled.div`
  color: ${colors.textSecondary};
  font-size: 12px;
`;

export const SmallButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border: none;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  margin: 5px 0 0 0;
`;