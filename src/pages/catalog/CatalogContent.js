import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/reducers/bookSlice";

const CatalogContent = () => {
  const [addNewBookModal, setAddNewBookModal] = useState(false);

  const columnDefs = [
    { headerName: "ISBN", field: "isbn" },
    {
      headerName: "Cover Image",
      field: "coverImage",
      sortable: true,
      autoHeight: true,
      cellRenderer: (params) => {
        return <img src={params.value} alt="img" style={{ width: 70 ,height: 80 }} />;
      },
    },
    { headerName: "Title", field: "title", sortable: true, wrapText: true,
      autoHeight: true, 
      width:400,
      cellRenderer: (params) => (
        <div>
          <p>{params.data.title}</p>
          <p>{params.data.description}</p>
        </div>
      ),
    },
    {
      headerName: "authorName",
      field: "authorName",
      wrapText: true,
      autoHeight: true,
    },
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
            // marginTop: 5,
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
            onClick={() => deleteBook(params.data)}
            $bgcolor={colors.light_red}
          >
            <FaTrash size={12} />
          </IconWrapperButton>
          <IconWrapperButton
            style={{ width: 30, height: 30, borderRadius: 6, padding: 0 }}
            onClick={() => toggleStatus(params.data)}
            $bgcolor={colors.light_purple}
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

  const dispatch = useDispatch();
  const catalogData = useSelector((state) => state.getBooks.books);
  console.log(catalogData);
  const status = useSelector((state) => state.getBooks.status);
  const error = useSelector((state) => state.getBooks.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

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
            style={{
              backgroundColor: colors.primary2,
              marginRight: 10,
              color: "#000",
            }}
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
