import React from "react";
import { Container } from "react-bootstrap";

export default function DesktopWrapper({ children, ...params }) {
   return (
      <section {...params} className={`${params.className} d-none d-lg-block`}>
         <Container>
            {children}
         </Container>
      </section>
   );
}