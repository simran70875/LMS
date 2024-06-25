import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {  FaUserGraduate } from "react-icons/fa";

import colors from "../styles/colors";
import profile from "../images/profile-picture.jpg";
import { IoPieChartSharp, IoSettings } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { GiReturnArrow } from "react-icons/gi";
import {
  MdArrowDropDown,
  MdIntegrationInstructions,
  MdInventory,
  MdLiveHelp,
} from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import {
  SmallButton,
  ProfileDesignation,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileSection,
} from "../styles/Profile.Styled";
import { BiArrowFromLeft } from "react-icons/bi";
import { BsBookshelf } from "react-icons/bs";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: ${colors.secondary};
  color: ${colors.textPrimary};
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  position: fixed;
  top: 0;
  justify-content: space-between; // ensure space between top and bottom sections
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Logo = styled.div`
  display: flex;
  color: ${colors.primary};
  font-size: 1.5em;
  font-weight: bold;
  align-items: center;
  padding: 15px 20px;
`;

const SidebarItems = styled.div`
  flex-grow: 1;
`;

const SidebarItem = styled(NavLink)`
  padding: 15px 10px;
  text-decoration: none;
  color: ${colors.textSecondary};
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 20px;
  margin-top: 5px;

  &:hover {
    background-color: ${colors.activeBackground};
    color: ${colors.textPrimary};
    border-radius: 0 30px 30px 0;
    svg {
      color: ${colors.textPrimary};
    }
  }
`;

const DropdownMenu = styled.div`
  flex-grow: 1;
`;

const DropdownItem = styled(NavLink)`
  padding: 15px 0px 15px 40px;
  text-decoration: none;
  color: ${colors.textSecondary};
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 20px;
  margin-top: 5px;

  &:hover {
    background-color: ${colors.activeBackground};
    color: ${colors.textPrimary};
    border-radius: 0 30px 30px 0;
    svg {
      color: ${colors.textPrimary};
    }
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  color: ${colors.textSecondary};
`;

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const handleDropdownItemClick = (name) => {
    setOpenDropdown((prev) => (prev === name ? "" : name));
  };

  const sidebarOptions = [
    {
      icon: IoPieChartSharp,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: ImBooks,
      name: "Manage Books",
      link: "/dashboard/catalog",
    },
    {
      icon: FaUserGraduate,
      name: "Manage Students",
      link: "/dashboard/users",
    },
    {
      icon: GiReturnArrow,
      name: "Issue Book",
      link: "/dashboard/checkoutAndReturns",
      dropdown: [
        { name: "Issued Books", link: "/dashboard/issued" },
        { name: "Returned Books", link: "/dashboard/returned" },
      ],
    },
    {
      icon: MdInventory,
      name: "Manage Fines",
      link: "/dashboard/fines",
      dropdown: [{ name: "Online Paid Dues", link: "/dashboard/OnlineDues" }],
    },
    {
      icon: BsBookshelf,
      name: "Requests Books",
      link: "/dashboard/requests",
    },
    {
      icon: IoSettings,
      name: "Settings",
      link: "/dashboard/settings",
    },
    {
      icon: IoMdNotifications,
      name: "Notifications",
      link: "/dashboard/notifications",
    },
    {
      icon: MdIntegrationInstructions,
      name: "Integration",
      link: "/dashboard/integration",
    },
    {
      icon: MdLiveHelp,
      name: "Help and Support",
      link: "/dashboard/help",
    },
  ];

  return (
    <SidebarContainer>
      <Logo>Book.com</Logo>
      <SidebarItems>
        {sidebarOptions.map((item) => (
          <React.Fragment key={item.name}>
            <SidebarItem
              to={item.link}
              onClick={
                item.dropdown ? () => handleDropdownItemClick(item.name) : null
              }
            >
              <IconWrapper>
                <item.icon />
              </IconWrapper>
              <p style={{ flex: 1, marginBottom: 0 }}>{item.name}</p>
              {item.dropdown && (
                <IconWrapper>
                  <MdArrowDropDown />
                </IconWrapper>
              )}
            </SidebarItem>
            {item.dropdown && openDropdown === item.name && (
              <DropdownMenu>
                {item.dropdown.map((dropdownItem) => (
                  <DropdownItem key={dropdownItem.name} to={dropdownItem.link}>
                    <IconWrapper>
                      <BiArrowFromLeft />
                    </IconWrapper>
                    {dropdownItem.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </React.Fragment>
        ))}
      </SidebarItems>

      <ProfileSection>
        <ProfileImage src={profile} alt="Profile" />
        <ProfileInfo>
          <ProfileName>John Doe</ProfileName>
          <ProfileDesignation>Librarian</ProfileDesignation>
        </ProfileInfo>

        <SmallButton>Logout</SmallButton>
      </ProfileSection>
    </SidebarContainer>
  );
};

export default Sidebar;
