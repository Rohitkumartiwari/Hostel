import React from "react";
import Sidebar from "../Sidebar/dashboard";
const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row ps-0 ">
        <div className="col-md-2 ps-0 pe-0">
          <Sidebar />
        </div>
        <div className="col-md-10 ps-0 pe-0">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
