import React, { useState } from "react";
import { SectionTitle } from "../../styles/SectionTitle.Styled";
import { AgGridContainer, Container } from "../../styles/containers.styled";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CancelButton,
  Input,
  Label,
  SuccessButton,
  Textarea,
} from "../../styles/Inputs.Styled";
import { IconWrapperButton } from "../../styles/List.styled";
import colors from "../../styles/colors";

import { RiMailAddFill } from "react-icons/ri";
import { AiFillDelete, AiFillEdit, AiOutlineHistory } from "react-icons/ai";

import AlertModal from "../../components/AlertModal";

const ManageFines = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [email, setEmail] = useState("john51745@gmail.com");
  const [message, setMessage] = useState(
    "Book Issued {Architecture of Italy} to you needs to be returned to the library."
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
    alert(`Email sent to ${selectedBook.name}`);
  };

  const columnDefs = [
    { headerName: "Book ID", field: "bookId" },
    { headerName: "Book Name", field: "bookName" },
    { headerName: "User ID", field: "userId" },
    { headerName: "Name", field: "name" },
    { headerName: "Issued Date", field: "issuedDate" },
    { headerName: "Date Due", field: "dateDue" },
    { headerName: "Delayed By", field: "delayedBy" },
    { headerName: "Fine", field: "fine" },
    { headerName: "Notes", field: "notes" },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: (params) => (
        <span style={{ color: params.value === "Paid" ? "green" : "red" }}>
          {params.value}
        </span>
      ),
    },
    {
      headerName: "Actions",
      cellRenderer: (params) => (
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <IconWrapperButton
            style={{ width: 30, height: 30, borderRadius: 6, padding: 0 }}
            onClick={() => openModal(params.data)}
            $bgcolor={colors.light_green}
          >
            <RiMailAddFill size={14} />
          </IconWrapperButton>
          <IconWrapperButton
            style={{ width: 30, height: 30, borderRadius: 6, padding: 0 }}
            onClick={() => {}}
            $bgcolor={colors.light_purple}
          >
            <AiOutlineHistory size={14} />
          </IconWrapperButton>

          <IconWrapperButton
            style={{ width: 30, height: 30, borderRadius: 6, padding: 0 }}
            onClick={() => {}}
            $bgcolor={colors.primary2}
          >
            <AiFillEdit size={14} />
          </IconWrapperButton>
          <IconWrapperButton
            style={{ width: 30, height: 30, borderRadius: 6, padding: 0 }}
            onClick={() => setDeleteModal(true)}
            $bgcolor={colors.light_red}
          >
            <AiFillDelete size={14} />
          </IconWrapperButton>
        </div>
      ),
    },
  ];

  const rowData = [
    {
      bookId: "1",
      bookName: "Book Title 1",
      userId: "1001",
      name: "John Doe",
      issuedDate: "2024-05-01",
      dateDue: "2024-05-15",
      delayedBy: "5 days",
      fine: "$5",
      notes: "First reminder sent",
      status: "Unpaid",
    },
    {
      bookId: "2",
      bookName: "Book Title 2",
      userId: "1002",
      name: "Jane Doe",
      issuedDate: "2024-05-05",
      dateDue: "2024-05-20",
      delayedBy: "3 days",
      fine: "$3",
      notes: "Second reminder sent",
      status: "Paid",
    },
    // Add more data as needed
  ];

  return (
    <>
      <Container>
        <SectionTitle>Manage Fines</SectionTitle>
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
              Send email to {selectedBook?.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="message">Add Message</Label>
                <Textarea
                  id="message"
                  type="text"
                  value={message}
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
        <AlertModal
          show={deleteModal}
          onHide={() => setDeleteModal(false)}
          title={"Please confirm if you want to delete this information."}
          onclickCancel={() => setDeleteModal(false)}
          onclickOk={() => setDeleteModal(false)}
          okBtnText={"Delete"}
        />
      </Container>
    </>
  );
};

export default ManageFines;
