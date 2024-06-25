import styled from "styled-components";
import colors from "./colors";

export const ActivityContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  color: ${colors.secondary};
`;

export const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${colors.secondary};
  font-size: 12px;
`;

export const ActivityItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;

export const IconWrapper = styled.div`
  color: ${colors.secondary};
  padding-top:3px;
`;

export const IconWrapperButton = styled.button`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor || "#f0f0f0"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.secondary};
  border:none;
`;
