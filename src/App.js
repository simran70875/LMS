import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/dashboard";
import Layout from "./components/Layout";
import Catalog from "./pages/catalog";
import Users from "./pages/users";
import CheckoutAndReturns from "./pages/checkoutReturns";
import Issued from "./pages/checkoutReturns/Issued";
import Returned from "./pages/checkoutReturns/Returned";
import Payments from "./pages/managePayments";
import PaidDues from "./pages/managePayments/PaidDues";
import UpdateProfile from "./pages/profile";
import Requests from "./pages/requestsBooks";
import LibraryManagement from "./pages/frontend";
import Login from "./pages/frontend/auth/Login";
import Register from "./pages/frontend/auth/register";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LibraryManagement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="users" element={<Users />} />
          <Route path="checkoutAndReturns" element={<CheckoutAndReturns />} />
          <Route path="issued" element={<Issued />} />
          <Route path="returned" element={<Returned />} />
          <Route path="fines" element={<Payments />} />
          <Route path="OnlineDues" element={<PaidDues />} />
          <Route path="updateProfile" element={<UpdateProfile />} />
          <Route path="requests" element={<Requests />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
