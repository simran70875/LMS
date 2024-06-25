import React from "react";
import CheckoutContent from "./CheckoutContent";
import { Outlet } from 'react-router-dom';


const CheckoutAndReturns = () => {
  return (
    <div>
      <CheckoutContent />
      <Outlet />
    </div>
  );
};

export default CheckoutAndReturns;
