import React from "react";
import { Container } from "react-bootstrap";

export default function MobileWrapper({ children, ...params }) {
   return (
      <section {...params} className={`${params.className} d-block d-lg-none`}>
         <Container>
            {children}
         </Container>
      </section>
   );
}