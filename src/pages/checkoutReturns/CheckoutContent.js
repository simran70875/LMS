import React, { useState } from "react";
import { SectionTitle } from "../../styles/SectionTitle.Styled";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Container } from "../../styles/containers.styled";
import { TabsContainer, TabButton } from "../../styles/Inputs.Styled";
import Return from "./ReturnBooks";
import Checkout from "./CheckoutBooks";
import Modal from "react-modal";
Modal.setAppElement("#root");

const CheckoutAndReturn = () => {
  const [activeTab, setActiveTab] = useState("checkout");

  return (
    <>
      <Container>
        <SectionTitle>Checkout and Return</SectionTitle>
        <TabsContainer>
          <TabButton
            active={activeTab === "checkout"}
            onClick={() => setActiveTab("checkout")}
          >
            Checkout
          </TabButton>
          <TabButton
            active={activeTab === "return"}
            onClick={() => setActiveTab("return")}
          >
            Return
          </TabButton>
        </TabsContainer>
        {activeTab === "checkout" ? <Checkout /> : <Return />}
      </Container>
    </>
  );
};

export default CheckoutAndReturn;
