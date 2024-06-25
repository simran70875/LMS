import styled from "styled-components";
import colors from "./colors";

export const CheckoutContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ReturnContainer = styled(CheckoutContainer)``;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 23px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 13px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 13px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 13px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 13px;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  margin: 5px 4px 5px 0px;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 13px;
`;

export const SuccessButton = styled(FormButton)`
  background-color: #4caf50;
  
`;

export const CancelButton = styled(FormButton)`
  background-color: #f44336;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? colors.secondary : "#ccc")};
  color: white;
  cursor: pointer;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    flex: 1;
    margin-right: 20px;
  }
  & > div:last-child {
    margin-right: 0;
  }
`;
