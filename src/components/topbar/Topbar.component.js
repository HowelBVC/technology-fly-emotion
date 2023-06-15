import React from "react";
import * as styles from "./Topbar.module.css";
import { Container, Row, Col } from "react-bootstrap";
import BurgerIcon from "../../images/svg/burger.svg";

const HomeButton = () => <a className={styles.home} href="/">Technology Fly Emotion</a>

const BurgerMenu = ({ onClickBurger }) => (
   <div onClick={onClickBurger} className={styles.burger}>
      <BurgerIcon />
   </div>
);

const TopbarDesktop = ({ navItems }) => {
   const NavItem = ({ label, data }) => (
      <Col md="auto">
         <p>
            <a href={`${data}`}>{label}</a>
         </p>
      </Col>
   )

   return (
      <div className={`${styles.topbar} ${styles.desktop} align-items-center d-none d-lg-flex`}>
         <Container>
            <Row className="justify-content-between align-items-center">
               {/* Logo Area */}
               <Col lg="auto"><h4><HomeButton /></h4></Col>

               {/* Nav Area */}
               <Col md="auto">
                  <Row>
                     {navItems.map((data, index) => <NavItem key={index} {...data} />)}
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

const TopbarMobile = ({ onClickBurger }) => (
   <div className={`${styles.topbar} ${styles.mobile} align-items-center justify-content-center d-flex d-lg-none`}>
      <h4><HomeButton /></h4>
      <BurgerMenu onClickBurger={onClickBurger} />
   </div>
);

export default function Topbar({ navItems, onClickBurger }) {
   return (
      <React.Fragment>
         <TopbarDesktop navItems={navItems} />
         <TopbarMobile onClickBurger={onClickBurger} />
      </React.Fragment>
   )
}