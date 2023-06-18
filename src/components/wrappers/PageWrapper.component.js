import React, { useState } from "react";
import Topbar from "../topbar/Topbar.component";
import Contatti from "../contatti/Contatti.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as styles from "./PageWrapper.module.css";
import { Row, Col } from "react-bootstrap";
import "./PageWrapper.module.css";

const NavItem = ({ label, data, onClick }) => (
   <div className={styles.navItem} onClick={onClick}>
      <h3><a href={`${data}`}>{label}</a></h3>
   </div>
)

const SideMenuMobile = ({ navItems, onClick, isSideMenuActive }) => (
   <div
      className={styles.sideMenu}
      style={{ right: isSideMenuActive ? "0%" : "-60%" }}
   >
      <Row className="d-flex justify-content-between" style={{ marginBottom: "16px" }}>
         <Col>
            <h2 style={{ display: "inline" }}>Menu</h2>
         </Col>
         <Col xs="auto" onClick={onClick}>
            <h2 style={{ display: "inline" }}>x</h2>
         </Col>
      </Row>
      {navItems.map((item, index) => <NavItem key={index} onClick={onClick} {...item} />)}
   </div>
);

const PageWrapper = ({ children }) => {
   const [isSideMenuActive, setIsSideMenuActive] = useState(false);

   const navItems = [
      {
         label: "About Us",
         data: "/#about-us",
      },
      {
         label: "Servizi",
         data: "/#servizi",
      },
      {
         label: "Realizzazioni",
         data: "/#realizzazioni",
      },
      {
         label: "Contatti",
         data: "#contatti",
      },
   ];

   return (
      <React.Fragment>
         <SideMenuMobile
            navItems={navItems}
            onClick={() => setIsSideMenuActive(!isSideMenuActive)}
            isSideMenuActive={isSideMenuActive}
         />
         <Topbar
            navItems={navItems}
            onClickBurger={() => setIsSideMenuActive(!isSideMenuActive)}
         />
         {children}
         <Contatti />
      </React.Fragment>
   );
}

export default PageWrapper;