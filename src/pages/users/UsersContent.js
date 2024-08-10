import React, { useState } from "react";
import Header from "../../components/Header";
import { Button, SectionTitle } from "../../styles/SectionTitle.Styled";
import {
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaToggleOff,
  FaPlus,
} from "react-icons/fa";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridContainer, Container } from "../../styles/containers.styled";
import { IconWrapperButton } from "../../styles/List.styled";
import colors from "../../styles/colors";
import { Modal } from "react-bootstrap";
import AddNewUser from "./addNewUser";

const UsersContent = () => {
  const [addNewUserModal, setAddNewUserModal] = useState(false);
  // Sample student data
  const studentData = [
    {
      id: 1,
      photo:
        "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      address: "123 Street, City",
      course: "Computer Science",
      years: 4,
      da: new Date("2022-05-18"), // Date example
      action: "active",
    },
    {
      id: 2,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76c_whJLWg5M4Xn9j_GPTVIm4NZSD80UrOQ&s",
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      address: "456 Avenue, Town",
      course: "Engineering",
      years: 3,
      da: new Date("2023-01-15"), // Date example
      action: "inactive",
    },
    // Add more students with similar structure
  ];
  const columnDefs = [
    { headerName: "ID", field: "id", sortable: true },
    {
      headerName: "Photo",
      field: "photo",
      sortable: false,
      cellRenderer: (params) => {
        return (
          <img
            src={params.value}
            alt="img"
            style={{ width: 30, objectFit: "contain" }}
          />
        );
      },
    },
    { headerName: "Name", field: "name", sortable: true },
    { headerName: "Email Address", field: "email", sortable: true },
    { headerName: "Phone", field: "phone", sortable: true },
    { headerName: "Street Address", field: "address", sortable: false },
    { headerName: "Course", field: "course", sortable: true },
    { headerName: "Years", field: "years", sortable: true },
    {
      headerName: "D.A",
      field: "da",
      sortable: true,
      cellRenderer: (params) =>
        params.data.da ? params.data.da.toLocaleDateString() : "-",
    },
    { headerName: "Action", field: "action", sortable: true },
    {
      headerName: "Actions",
      cellRenderer: (params) => (
        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
          }}
        >
          <IconWrapperButton
            style={{
              width: 30,
              height: 30,
              borderRadius: 6,
              padding: 0,
            }}
            onClick={() => editStudent(params.data)}
            $bgcolor={colors.light_green}
          >
            <FaEdit size={12} />
          </IconWrapperButton>
          <IconWrapperButton
            style={{
              width: 30,
              height: 30,
              borderRadius: 6,
              padding: 0,
            }}
            onClick={() => deleteStudent(params.data)}
            $bgcolor={colors.light_red}
          >
            <FaTrash size={12} />
          </IconWrapperButton>
          <IconWrapperButton
            style={{
              width: 30,
              height: 30,
              borderRadius: 6,
              padding: 0,
            }}
            onClick={() => toggleStatus(params.data)}
            $bgcolor={
              params.data.action === "active"
                ? colors.light_red
                : colors.light_green
            }
          >
            {params.data.action === "active" ? (
              <FaToggleOff size={12} />
            ) : (
              <FaToggleOn size={12} />
            )}
          </IconWrapperButton>
        </div>
      ),
    },
  ];
  const editStudent = (student) => {
    // Implement edit functionality
    console.log("Edit student:", student);
  };
  const deleteStudent = (student) => {
    // Implement delete functionality
    console.log("Delete student:", student);
  };
  const toggleStatus = (student) => {
    // Implement enable/disable functionality
    console.log("Toggle status:", student);
  };

  return (
    <Container>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <SectionTitle>Students</SectionTitle>
        <Button onClick={() => setAddNewUserModal(true)}>
          <FaPlus />
          Add New Student
        </Button>
      </div>
      <AgGridContainer className="ag-theme-quartz">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={studentData}
          gridOptions={{
            pagination: true,
            paginationPageSize: 7,
            paginationPageSizeSelector: [7, 10, 20],
          }}
        />
      </AgGridContainer>
      <Modal
        size="xl"
        show={addNewUserModal}
        onHide={() => setAddNewUserModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 17 }}>Return Book</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0 }}>
          <AddNewUser />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default UsersContent;
