// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f4f4f4;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #1a1a1a;
  }

  // p, a, span, div {
  //   color: #1a1a1a;
  // }
  .ag-theme-quartz {
    --ag-header-column-separator-display: block;
    --ag-header-column-separator-height: 100%;
    --ag-header-column-separator-width: 1px;
    --ag-header-column-separator-color: white;
    --ag-header-foreground-color: ${colors.textPrimary};
    --ag-header-background-color: ${colors.secondary};
    --ag-header-cell-hover-background-color: ${colors.activeBackground};
}
.ag-theme-quartz .ag-cell-value {
  line-height: 20px !important;
  padding-top: 5px; /* space top */
  padding-bottom: 5px; /* space bottom */
}
  .active {
    background-color: ${colors.activeBackground};
    color: ${colors.textPrimary};
    border-radius: 0 30px 30px 0;
    svg {
      color: ${colors.textPrimary};
    }
  }
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;

export default GlobalStyles;
