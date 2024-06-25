import React from "react";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import colors from "../../styles/colors";

const NotificationsContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: ${colors.secondary};
`;

const NotificationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NotificationItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconWrapper = styled.div`
  color: ${colors.primary};
`;

const Notifications = () => {
  const notifications = [
    "Reminder: 'The Catcher in the Rye' is overdue.",
    "New member registered: Alice Johnson.",
  ];

  return (
    <NotificationsContainer>
      <NotificationList>
        {notifications.map((notification, index) => (
          <NotificationItem key={index}>
            <IconWrapper>
              <FaBell />
            </IconWrapper>
            {notification}
          </NotificationItem>
        ))}
      </NotificationList>
    </NotificationsContainer>
  );
};

export default Notifications;
