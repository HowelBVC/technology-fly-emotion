import React from "react";
import * as styles from "./Topbar.module.css";
import { Container, Row, Col } from "react-bootstrap";

const navItems = [
   {
      label: "Home",
      data: "home",
   },
   {
      label: "Servizi",
      data: "servizi",
   },
   {
      label: "Realizzazioni",
      data: "realizzazioni",
   },
   {
      label: "Contattaci",
      data: "contattaci",
   },
];

const TopbarDesktop = () => {
   const NavItem = ({ label }) => <Col><h4>{label}</h4></Col>

   return (
      <div className={`${styles.topbar} ${styles.desktop} align-items-center d-none d-lg-flex`}>
         <Container>
            <Row className="justify-content-between align-items-center">
               {/* Logo Area */}
               <Col lg="auto"><h1>Technology Fly Emotion</h1></Col>

               {/* Nav Area */}
               <Col lg={5}>
                  <Row>
                     {navItems.map(({ label }) => <NavItem label={label} />)}
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

const TopbarMobile = () => {
   return (
      <div className={`${styles.topbar} ${styles.mobile} align-items-center justify-content-center d-flex d-lg-none`}>
         <h4>Technology Fly Emotion</h4>
      </div>
   )
}

export default function Topbar() {
   return (
      <React.Fragment>
         <TopbarDesktop />
         <TopbarMobile />
      </React.Fragment>
   )
}