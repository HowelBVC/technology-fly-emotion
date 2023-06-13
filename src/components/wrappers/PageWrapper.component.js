import React from "react";
import Topbar from "../topbar/Topbar.component";
import Contatti from "../contatti/Contatti.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PageWrapper.css";

const PageWrapper = ({ children }) => (
   <React.Fragment>
      <Topbar />
      {children}
      <Contatti />
   </React.Fragment>
);
export default PageWrapper;