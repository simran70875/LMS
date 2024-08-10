import React, { useState } from "react";
import { SectionTitle } from "../../styles/SectionTitle.Styled";
import { AgGridContainer, Container } from "../../styles/containers.styled";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconWrapperButton } from "../../styles/List.styled";
import colors from "../../styles/colors";
import { MdCheckCircle } from "react-icons/md"; // Added for check icon
import AlertModal from "../../components/AlertModal";

const PaidDues = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (book) => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSendEmail = () => {
    // Logic to send an email
    closeModal();
  };

  const columnDefs = [
    { headerName: "Inv Id", field: "invId" },
    { headerName: "Currency", field: "currency" },
    { headerName: "PaymentId", field: "paymentId" },
    { headerName: "PayerId", field: "payerId" },
    { headerName: "PayerEmail", field: "payerEmail" },
    { headerName: "PayerPhone", field: "payerPhone" },
    { headerName: "Payed Amount", field: "payedAmount" },
    { headerName: "Payment Status", field: "paymentStatus" },
    { headerName: "BookId", field: "bookId" },
    { headerName: "UserId", field: "userId" },
    { headerName: "Issued Date", field: "issuedDate" },
    { headerName: "Due Date", field: "dueDate" },
    { headerName: "PayedForDays", field: "payedForDays" },
    { headerName: "PerDayFine", field: "perDayFine" },
    { headerName: "Mode", field: "mode" },
    { headerName: "Time", field: "time" },
    {
      headerName: "Action",
      cellRenderer: (params) => (
        <IconWrapperButton
          style={{
            width: 30,
            height: 30,
            borderRadius: 6,
            padding: 0,
          }}
          onClick={() => openModal()}
          $bgcolor={colors.light_green}
        >
          <MdCheckCircle size={18} />
        </IconWrapperButton>
      ),
    },
  ];

  const rowData = [
    {
      invId: "INV123",
      currency: "USD",
      paymentId: "PAY123",
      payerId: "PAYER123",
      payerEmail: "payer@example.com",
      payerPhone: "123-456-7890",
      payedAmount: "$50",
      paymentStatus: "Completed",
      bookId: "BOOK123",
      userId: "USER123",
      issuedDate: "2024-05-01",
      dueDate: "2024-05-15",
      payedForDays: "14",
      perDayFine: "$1",
      mode: "Online",
      time: "2024-05-14T10:00:00Z",
    },
    // Add more data as needed
  ];

  return (
    <>
      <Container>
        <SectionTitle>Manage Online Paid Dues</SectionTitle>
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


        <AlertModal
          show={modalIsOpen}
          onHide={closeModal}
          title={"Are your sure to approve this due?"}
          onclickCancel={closeModal}
          onclickOk={handleSendEmail}
          okBtnText={'Ok'}
        />
      </Container>
    </>
  );
};

export default PaidDues;
