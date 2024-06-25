import React from "react";
import styled from "styled-components";
import { FaPlus, FaUserPlus, FaBookOpen, FaBookReader } from "react-icons/fa";
import { ActionButton } from "../../styles/SectionTitle.Styled";

const ActionsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const QuickActions = () => {
  return (
    <ActionsContainer>
      <ActionButton>
        <FaPlus />
        Add New Book
      </ActionButton>
      <ActionButton>
        <FaUserPlus />
        Add New Student
      </ActionButton>
      <ActionButton>
        <FaBookOpen />
        Issue Book
      </ActionButton>
      <ActionButton>
        <FaBookReader />
        Return Book
      </ActionButton>
    </ActionsContainer>
  );
};

export default QuickActions;
