import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Overview from "./Overview";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";
import colors from "../../styles/colors";
import { SectionTitle } from "../../styles/SectionTitle.Styled";
import {
  AgGridContainer,
  Container,
  Graph,
  GraphContainer,
  RowContainer,
  Section,
} from "../../styles/containers.styled";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardContent = () => {
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Books Isuued",
        data: [30, 20, 40, 50, 60, 70],
        fill: false,
        borderColor: colors.primary,
      },
    ],
  };

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "New Students",
        data: [5, 10, 8, 15, 20, 25],
        backgroundColor: colors.primary2,
      },
    ],
  };

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Member Name", field: "memberName" },
    { headerName: "Book Title", field: "bookTitle" },
    { headerName: "ISBN", field: "isbn" },
    { headerName: "Author", field: "author" },
    { headerName: "Genre", field: "genre" },
    { headerName: "Checkout Date", field: "checkoutDate" },
    { headerName: "Return Date", field: "returnDate" },
  ];

  const rowData = [
    {
      id: 1,
      memberName: "John Doe",
      bookTitle: "React for Beginners",
      isbn: "123-456-789",
      author: "John Smith",
      genre: "Technology",
      checkoutDate: "2024-01-10",
      returnDate: "2024-01-17",
    },
    {
      id: 2,
      memberName: "Jane Smith",
      bookTitle: "Advanced Node.js",
      isbn: "987-654-321",
      author: "Jane Doe",
      genre: "Technology",
      checkoutDate: "2024-01-12",
      returnDate: "2024-01-19",
    },
    {
      id: 3,
      memberName: "Bob Johnson",
      bookTitle: "CSS Mastery",
      isbn: "456-789-123",
      author: "Bob Brown",
      genre: "Design",
      checkoutDate: "2024-01-15",
      returnDate: "2024-01-22",
    },
    {
      id: 4,
      memberName: "Alice Green",
      bookTitle: "JavaScript: The Good Parts",
      isbn: "321-654-987",
      author: "Douglas Crockford",
      genre: "Programming",
      checkoutDate: "2024-01-18",
      returnDate: "2024-01-25",
    },
  ];

  return (
    <Container>
      <Section>
        <QuickActions />
      </Section>
      <Section>
        <SectionTitle>Overview</SectionTitle>
        <Overview />
      </Section>

      <Section>
        <GraphContainer>
          <Graph>
            <Line data={lineChartData} />
          </Graph>
          <Graph>
            <Bar data={barChartData} />
          </Graph>
        </GraphContainer>
      </Section>

      <Section>
        <RowContainer>
          <div style={{ flex: 1 }}>
            <SectionTitle>Recent Issued Books</SectionTitle>
            <AgGridContainer className="ag-theme-quartz">
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
          </div>
          <div>
            <SectionTitle>Recent Activities</SectionTitle>
            <RecentActivity />
          </div>
        </RowContainer>
      </Section>
    </Container>
  );
};

export default DashboardContent;
