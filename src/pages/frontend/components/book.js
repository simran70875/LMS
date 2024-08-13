import styled from "styled-components";
import colors from "../../../styles/colors";

export const BookListSection = styled.section`
  padding: 50px 0;
  background-color: #1e1e1e;
  color: #ffffff;
  position: relative;
`;

export const Heading = styled.h2`
  font-size: 1em;
  color: ${colors.primary2};
  transform: rotate(-90deg);
  letter-spacing: 5px;
`;

export const Book = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;
`;

export const BookIndex = styled.div`
  position: absolute;
  top: -20px;
  right: 0px;
  font-size: 2em;
  color: rgb(69 163 87);
  z-index: 1;
  font-weight: 900;
`;

export const BookImage = styled.img`
  width: 200px;
  margin: auto;
  border-radius: 10px;
  border: 2px solid;
  height: 280px;
`;

export const BookTitle = styled.div`
  font-size: 0.7em;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
`;
