import styled from "styled-components";
import colors from "./colors";

export const Container = styled.div`
  margin-top: 60px;
  padding: 20px;
  width: calc(100% - 250px);
  margin-left: 250px;
  min-height: 100vh;
  background-color: #f5f6f8;
  color: ${colors.secondary};
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const GraphContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Graph = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const AgGridContainer = styled.div`
  height: 550px;
  width: 100%;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom:20px;
`;
