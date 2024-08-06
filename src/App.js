import React, { useEffect } from "react";
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
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
   useEffect(() =>{
    console.log("isLoggedIn ==>" ,isLoggedIn);
   })
  
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LibraryManagement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Layout />} />}>
          <Route index element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="catalog" element={<PrivateRoute element={<Catalog />} />} />
          <Route path="users" element={<PrivateRoute element={<Users />} />} />
          <Route path="checkoutAndReturns" element={<PrivateRoute element={<CheckoutAndReturns />} />} />
          <Route path="issued" element={<PrivateRoute element={<Issued />} />} />
          <Route path="returned" element={<PrivateRoute element={<Returned />} />} />
          <Route path="fines" element={<PrivateRoute element={<Payments />} />} />
          <Route path="paidDues" element={<PrivateRoute element={<PaidDues />} />} />
          <Route path="updateProfile" element={<PrivateRoute element={<UpdateProfile />} />} />
          <Route path="requests" element={<PrivateRoute element={<Requests />} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
