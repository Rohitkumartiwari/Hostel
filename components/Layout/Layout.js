import React from "react";
import Sidebar from "../Sidebar/dashboard";
import { ToastContainer } from "react-toastify";
const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row ps-0 ">
        <div className="col-md-2 ps-0 pe-0">
          <Sidebar />
          <ToastContainer />
        </div>
        <div className="col-md-10 ps-0 pe-0">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
