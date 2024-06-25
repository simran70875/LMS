import React, { useState } from "react";
import { SectionTitle } from "../../styles/SectionTitle.Styled";
import { AgGridContainer, Container } from "../../styles/containers.styled";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Modal } from "react-bootstrap";
import { IconWrapperButton } from "../../styles/List.styled";
import colors from "../../styles/colors";
import { GiReturnArrow } from "react-icons/gi";
import { RiMailFill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CancelButton,
  Input,
  Label,
  SuccessButton,
  Textarea,
} from "../../styles/Inputs.Styled";
import Return from "./ReturnBooks";

const Issued = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalReturnIsOpen, setReturnModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [email, setEmail] = useState("john51745@gmail.com");
  const [messege, setMessage] = useState(
    "Book Issued {Architecture of Italy} to you needs to be return to the library."
  );

  const openModal = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBook(null);
  };

  const handleSendEmail = () => {
    // Logic to send an email
    closeModal();
    alert(`Email sent to ${selectedBook.studentName}`);
  };

  const columnDefs = [
    { headerName: "Book ID", field: "bookId" },
    { headerName: "Book Title", field: "bookTitle" },
    { headerName: "Student ID", field: "studentId" },
    { headerName: "Student Name", field: "studentName" },
    { headerName: "Issued Date", field: "issuedDate" },
    { headerName: "Due Date", field: "dueDate" },
    { headerName: "Status", field: "status" },
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
            onClick={() => setReturnModalIsOpen(true)}
            bgColor={colors.light_green}
          >
            <GiReturnArrow size={12} />
          </IconWrapperButton>
          <IconWrapperButton
            style={{
              width: 30,
              height: 30,
              borderRadius: 6,
              padding: 0,
            }}
            onClick={() => openModal(params.data)}
            bgColor={colors.light_red}
          >
            <RiMailFill size={14} />
          </IconWrapperButton>
        </div>
      ),
    },
  ];

  const rowData = [
    {
      bookId: "1",
      bookTitle: "Book Title 1",
      studentId: "1001",
      studentName: "John Doe",
      issuedDate: "2024-05-01",
      dueDate: "2024-05-15",
      status: "Issued",
    },
    // Add more data as needed
  ];

  return (
    <>
      <Container>
        <SectionTitle>All Issued Books</SectionTitle>
        <AgGridContainer className="ag-theme-quartz" style={{ marginTop: 40 }}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            gridOptions={{
              pagination: true,
              paginationPageSize: 7,
              paginationPageSizeSelector: [7, 10, 20],
            }}
          />
        </AgGridContainer>

        <Modal show={modalIsOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: 17 }}>
              Send email to {selectedBook?.studentName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <Label htmlFor="bookId">Email</Label>
                <Input
                  id="bookId"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="category">Add Message</Label>
                <Textarea
                  id="messege"
                  type="text"
                  value={messege}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <CancelButton onClick={closeModal}>Cancel</CancelButton>
              <SuccessButton onClick={handleSendEmail}>Send</SuccessButton>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal
          size="xl"
          show={modalReturnIsOpen}
          onHide={() => setReturnModalIsOpen(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: 17 }}>Return Book</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: 0 }}>
            <Return />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default Issued;
