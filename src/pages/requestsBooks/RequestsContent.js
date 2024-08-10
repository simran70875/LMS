import React, { useState } from "react";
import { SectionTitle } from "../../styles/SectionTitle.Styled";
import { FaTrash, FaCheck } from "react-icons/fa";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridContainer, Container } from "../../styles/containers.styled";
import { IconWrapperButton } from "../../styles/List.styled";
import colors from "../../styles/colors";
import AlertModal from "../../components/AlertModal";

const RequestsContent = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [approveModal, setApproveModal] = useState(false);

  const RequestsData = [
    {
      isbn: "978-0-7432-7356-5",
      imageUrl:
        "https://marketplace.canva.com/EAFMf17QgBs/1/0/1003w/canva-green-and-yellow-modern-book-cover-business-Ah-do4Y91lk.jpg",
      title: "The Great Gatsby",
      description:
        "The Great Gatsby is a novel by American writer F. Scott Fitzgerald. It tells the story of a man named Jay Gatsby and his pursuit of the American Dream.",
      category: "Fiction",
      publicationYear: 1925,
      availableCopies: 5,
      borrowed: 4,
      userId: "user123",
      personName: "John Doe",
      likes: 30,
      addedOn: "2024-01-01",
    },
    {
      isbn: "978-0-06-112008-4",
      imageUrl: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      title: "To Kill a Mockingbird",
      description:
        "To Kill a Mockingbird is a novel by Harper Lee. It explores themes of racial injustice and the loss of innocence in the American South.",
      category: "Literary Fiction",
      publicationYear: 1960,
      availableCopies: 3,
      borrowed: 2,
      userId: "user456",
      personName: "Jane Smith",
      likes: 15,
      addedOn: "2024-02-01",
    },
    // Add more books with similar structure
  ];

  const columnDefs = [
    { headerName: "Book Name", field: "title", sortable: true },
    {
      headerName: "Book URL",
      field: "imageUrl",
      sortable: true,
      cellRenderer: (params) => {
        return (
          <a href={params.value} target="_blank" rel="noopener noreferrer">
            {params.value}
          </a>
        );
      },
    },
    {
      headerName: "Book Description",
      field: "description",
      wrapText: true,
      autoHeight: true,
    },
    { headerName: "User ID", field: "userId" },
    { headerName: "Person's Name", field: "personName" },
    { headerName: "Likes", field: "likes" },
    { headerName: "Added On", field: "addedOn" },
    {
      headerName: "Actions",
      cellRenderer: (params) => (
        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <IconWrapperButton
            style={{
              width: 30,
              height: 30,
              borderRadius: 6,
              padding: 0,
            }}
            onClick={() => setApproveModal(true)}
            $bgcolor={colors.light_green}
          >
            <FaCheck size={12} />
          </IconWrapperButton>
          <IconWrapperButton
            style={{
              width: 30,
              height: 30,
              borderRadius: 6,
              padding: 0,
            }}
            onClick={() => setDeleteModal(true)}
            $bgcolor={colors.light_red}
          >
            <FaTrash size={12} />
          </IconWrapperButton>
        </div>
      ),
    },
  ];

  const approveRequest = () => {
    // Implement approve functionality
    console.log("Request approved");
    setApproveModal(false);
  };

  const deleteRequest = () => {
    // Implement delete functionality
    console.log("Request deleted");
    setDeleteModal(false);
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <SectionTitle>Requests</SectionTitle>
      </div>
      <AgGridContainer className="ag-theme-quartz">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={RequestsData}
          gridOptions={{
            pagination: true,
            paginationPageSize: 7,
            paginationPageSizeSelector: [7, 10, 20],
          }}
        />
      </AgGridContainer>
      <AlertModal
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
        title={"Please confirm if you want to delete this information."}
        onclickCancel={() => setDeleteModal(false)}
        onclickOk={deleteRequest}
        okBtnText={"Delete"}
      />
      <AlertModal
        show={approveModal}
        onHide={() => setApproveModal(false)}
        title={"Please confirm if you want to approve this request."}
        onclickCancel={() => setApproveModal(false)}
        onclickOk={approveRequest}
        okBtnText={"Approve"}
      />
    </Container>
  );
};

export default RequestsContent;
