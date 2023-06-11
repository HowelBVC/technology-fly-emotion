import React from "react";
import * as styles from "./Topbar.module.css";
import { Container, Row, Col } from "react-bootstrap";

const navItems = [
   {
      label: "Home",
      data: "/",
   },
   {
      label: "Servizi",
      data: "/servizi",
   },
   {
      label: "Realizzazioni",
      data: "/realizzazioni",
   },
   {
      label: "Contatti",
      data: "/contatti",
   },
];

const HomeButton = () => <a className={styles.home} href="/">Technology Fly Emotion</a>

const TopbarDesktop = () => {
   const NavItem = ({ label, data }) => (
      <Col>
         <h4>
            <a href={`${data}`}>{label}</a>
         </h4>
      </Col>
   )

   return (
      <div className={`${styles.topbar} ${styles.desktop} align-items-center d-none d-lg-flex`}>
         <Container>
            <Row className="justify-content-between align-items-center">
               {/* Logo Area */}
               <Col lg="auto"><h4><HomeButton /></h4></Col>

               {/* Nav Area */}
               <Col lg={6}>
                  <Row>
                     {navItems.map((data, index) => <NavItem key={index} {...data} />)}
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

const TopbarMobile = () => (
   <div className={`${styles.topbar} ${styles.mobile} align-items-center justify-content-center d-flex d-lg-none`}>
      <h4><HomeButton /></h4>
   </div>
);

export default function Topbar() {
   return (
      <React.Fragment>
         <TopbarDesktop />
         <TopbarMobile />
      </React.Fragment>
   )
}