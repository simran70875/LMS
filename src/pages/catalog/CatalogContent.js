import React, { useState } from "react";
import { Button, SectionTitle } from "../../styles/SectionTitle.Styled";
import { FaEdit, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridContainer, Container } from "../../styles/containers.styled";
import { FaPlus } from "react-icons/fa";
import { IconWrapperButton } from "../../styles/List.styled";
import colors from "../../styles/colors";
import { Modal } from "react-bootstrap";
import AddBook from "./AddNewBook";

const CatalogContent = () => {
  const [addNewBookModal, setAddNewBookModal] = useState(false);
  // Sample catalog data
  const catalogData = [
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
    },
    // Add more books with similar structure
  ];

  const columnDefs = [
    { headerName: "ISBN", field: "isbn" },
    {
      headerName: "Cover Image",
      field: "imageUrl",
      sortable: true,
      cellRenderer: (params) => {
        return <img src={params.value} alt="img" style={{ width: 70 }} />;
      },
    },
    { headerName: "Title", field: "title", sortable: true },

    {
      headerName: "Description",
      field: "description",
      wrapText: true,
      autoHeight: true,
    },
    { headerName: "Category", field: "category" },
    { headerName: "publicationYear", field: "publicationYear" },

    { headerName: "availableCopies", field: "availableCopies" },
    { headerName: "borrowed", field: "borrowed" },
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
            onClick={() => editBook(params.data)}
            bgColor={colors.light_green}
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
            onClick={() => deleteBook(params.data)}
            bgColor={colors.light_red}
          >
            <FaTrash size={12} />
          </IconWrapperButton>
          <IconWrapperButton
            style={{ width: 30, height: 30, borderRadius: 6, padding: 0 }}
            onClick={() => toggleStatus(params.data)}
            bgColor={colors.light_purple}
          >
            {params.data.enabled ? (
              <FaToggleOn size={12} />
            ) : (
              <FaToggleOff size={12} />
            )}
          </IconWrapperButton>
        </div>
      ),
    },
  ];

  const editBook = (book) => {
    // Implement edit functionality
    console.log("Edit book:", book);
  };

  const deleteBook = (book) => {
    // Implement delete functionality
    console.log("Delete book:", book);
  };

  const toggleStatus = (book) => {
    // Implement enable/disable functionality
    console.log("Toggle status:", book);
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
        <SectionTitle>Catalog</SectionTitle>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{ backgroundColor: colors.primary2, marginRight: 10,color:'#000' }}
            onClick={() => setAddNewBookModal(true)}
          >
            <FaPlus />
            Import Books
          </Button>
          <Button onClick={() => setAddNewBookModal(true)}>
            <FaPlus />
            Add New Book
          </Button>
        </div>
      </div>
      <AgGridContainer className="ag-theme-quartz">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={catalogData}
          gridOptions={{
            pagination: true,
            paginationPageSize: 7,
            paginationPageSizeSelector: [7, 10, 20],
          }}
        />
      </AgGridContainer>
      <Modal
        size="xl"
        show={addNewBookModal}
        onHide={() => setAddNewBookModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 17 }}>Return Book</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0 }}>
          <AddBook />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CatalogContent;
