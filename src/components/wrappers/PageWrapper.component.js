import React from "react";
import Topbar from "../topbar/Topbar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PageWrapper.css";

const PageWrapper = ({ children }) => (
   <React.Fragment>
      <Topbar />
      {children}
   </React.Fragment>
);
export default PageWrapper;