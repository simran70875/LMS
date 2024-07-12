// src/components/Header.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import { SmallButton, ProfileDesignation, ProfileImage, ProfileInfo, ProfileName, ProfileSection} from "../styles/Profile.Styled";
import profile from "../images/profile-picture.jpg";
import colors from "../styles/colors";
import { BiLogOut, BiUser } from "react-icons/bi";
import {Link} from "react-router-dom";

const HeaderContainer = styled.div`
  width: calc(100% - 250px);
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  left: 250px;
  top: 0;
  color: #1a1a1a;
  z-index: 1000;
`;

const SearchBar = styled.input`
  height: 40px;
  padding: 17px;
  border: none;
  border-radius: 5px;
  width: 335px;
  margin-right: 5px;
  background: #f5f6f8;
  &:focus-visible {
    outline: none;
  }
`;

const NotificationIcon = styled.div`
  position: relative;
  margin-right: 20px;
  cursor: pointer;
`;

const NotificationCount = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${colors.red};
  color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1000;
  padding: 10px;
  border: 1px solid #eee;
`;

const DropdownItem = styled(Link)`
  padding: 0 7px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const NotificationsDropdown = styled(DropdownMenu)`
  width: 300px;
  top: 40px;
`;

const ProfileDropdown = styled(DropdownMenu)`
  width: 150px;
`;

const Header = () => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const notifications = [
    {
      img: profile,
      text: "New book added to the library djhasj ahdsjkahd hahdjashd jashdash",
    },
    {
      img: profile,
      text: "Membership renewed for John Doe",
    },
    {
      img: profile,
      text: "Book borrowed by Jane Smith",
    },
  ];

  return (
    <HeaderContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchBar placeholder="Search..." />
        <SmallButton style={{ padding: 10, height: 40, margin: 0 }}>
          Search
        </SmallButton>
      </div>
      <ProfileSection
        style={{ padding: 0, backgroundColor: "#fff0", borderTopWidth: 0 }}
      >
        <NotificationIcon onClick={toggleNotifications}>
          <FaBell size={20} />
          {notifications.length > 0 && (
            <NotificationCount>{notifications.length}</NotificationCount>
          )}
          {notificationsOpen && (
            <NotificationsDropdown>
              {notifications.map((item, index) => (
                <div style={{ display: "flex", padding: 5 }}>
                  <ProfileImage
                    style={{ width: 25, height: 25, margin: 0 }}
                    src={item.img}
                    alt="Profile"
                  />
                  <DropdownItem style={{ flex: 1 }} key={index}>
                    {item.text}
                  </DropdownItem>
                </div>
              ))}
            </NotificationsDropdown>
          )}
        </NotificationIcon>
        <div
          onClick={toggleProfile}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: colors.secondary,
          }}
        >
          <ProfileImage src={profile} alt="Profile" />
          <ProfileInfo>
            <ProfileName style={{ color: colors.secondary }}>
              John Doe
            </ProfileName>
            <ProfileDesignation>Librarian</ProfileDesignation>
          </ProfileInfo>
          {profileOpen && (
            <ProfileDropdown>
              <div style={{ display: "flex", padding: 5 }}>
                <BiUser />
                <DropdownItem to="/updateProfile">Edit Profile</DropdownItem>
              </div>
              <div style={{ display: "flex", padding: 5 }}>
                <BiLogOut />
                <DropdownItem to="/login">Logout</DropdownItem>
              </div>
            </ProfileDropdown>
          )}
        </div>
      </ProfileSection>
    </HeaderContainer>
  );
};

export default Header;
