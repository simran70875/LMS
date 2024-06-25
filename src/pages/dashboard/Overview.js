import React from "react";
import styled from "styled-components";
import { FaBook, FaUser, FaArrowUp, FaArrowDown } from "react-icons/fa";
import colors from "../../styles/colors";
import { IconWrapperButton } from "../../styles/List.styled";

const OverviewContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const OverviewCard = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: ${colors.secondary};
  &:hover {
    background-color: ${colors.secondary};
    p,
    a,
    span,
    div {
      color: #fff;
    }
  }
`;

const CardTitle = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight500;
  
`;

const CardValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  display: flex;
  gap: 10px;
`;

const Overview = () => {
  return (
    <OverviewContainer>
      <OverviewCard>
        <IconWrapperButton bgColor={colors.light_green}>
          <FaBook size={15} />
        </IconWrapperButton>
        <CardTitle>Total Books</CardTitle>
        <CardValue>500</CardValue>
      </OverviewCard>
      <OverviewCard>
        <IconWrapperButton bgColor={colors.primary2}>
          <FaUser size={15} />
        </IconWrapperButton>
        <CardTitle>Total Students</CardTitle>
        <CardValue>200</CardValue>
      </OverviewCard>
      <OverviewCard>
        <IconWrapperButton bgColor={colors.light_red}>
          <FaArrowUp size={15} />
        </IconWrapperButton>
        <CardTitle>Books Issued</CardTitle>
        <CardValue>120</CardValue>
      </OverviewCard>
      <OverviewCard>
        <IconWrapperButton bgColor={colors.light_purple}>
          <FaArrowDown size={15} />
        </IconWrapperButton>
        <CardTitle>Books Overdue</CardTitle>
        <CardValue>10</CardValue>
      </OverviewCard>
    </OverviewContainer>
  );
};

export default Overview;
