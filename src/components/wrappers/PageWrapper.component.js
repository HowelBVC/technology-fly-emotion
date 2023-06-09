import React from "react";
import { Container } from "react-bootstrap";
import Topbar from "../topbar/Topbar.component";

const PageWrapper = ({ children }) => {
   return (
      <React.Fragment>
         <Topbar />
         <Container>
            {children}
         </Container>
      </React.Fragment>
   );
}
export default PageWrapper;