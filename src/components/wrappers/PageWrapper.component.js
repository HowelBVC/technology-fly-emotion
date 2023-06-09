import React from "react";
import { Container } from "react-bootstrap";
import Topbar from "../topbar/Topbar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PageWrapper.css";

const PageWrapper = ({ children }) => (
   <React.Fragment>
      <Topbar />
      <Container>
         {children}
      </Container>
   </React.Fragment>
);
export default PageWrapper;