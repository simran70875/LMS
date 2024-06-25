import React from "react";
import { FaHistory } from "react-icons/fa";
import {
  ActivityContainer,
  ActivityList,
  ActivityItem,
  IconWrapper
} from "../../styles/List.styled";

const RecentActivity = () => {
  const activities = [
    "John Doe borrowed 'The Great Gatsby'",
    "Jane Smith returned '1984'",
    "Alice Johnson borrowed 'To Kill a Mockingbird'",
  ];

  return (
    <ActivityContainer>
      <ActivityList>
        {activities.map((activity, index) => (
          <ActivityItem key={index}>
            <IconWrapper>
              <FaHistory />
            </IconWrapper>
            {activity}
          </ActivityItem>
        ))}
      </ActivityList>
    </ActivityContainer>
  );
};

export default RecentActivity;
