import React from "react";
import { navigate } from "gatsby";
import * as styles from "./Topbar.module.css";
import { Container, Row, Col } from "react-bootstrap";
import BurgerIcon from "../../images/svg/burger.svg";
import Logo from "../../images/svg/logo_bianco.svg";

const HomeButton = () => {
   const handleClick = () => navigate("/");

   return (
      <Col onClick={handleClick} md="auto" className={styles.homeButton}>
         <Row>
            <Col className={styles.logo} md="auto">
               <Logo />
            </Col>
            <Col md="auto" className="d-flex align-items-center" >
               <h4>Technology Fly Emotion</h4>
            </Col>
         </Row>
      </Col>
   );
}

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
               <HomeButton />

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

const TopbarMobile = ({ onClickBurger }) => {
   const handleClick = () => navigate("/");

   return (
      <div className={`${styles.topbar} ${styles.mobile} align-items-center justify-content-center d-flex d-lg-none`}>
         <h4 onClick={handleClick}>Technology Fly Emotion</h4>
         <BurgerMenu onClickBurger={onClickBurger} />
      </div>
   );
}

export default function Topbar({ navItems, onClickBurger }) {
   return (
      <React.Fragment>
         <TopbarDesktop navItems={navItems} />
         <TopbarMobile onClickBurger={onClickBurger} />
      </React.Fragment>
   )
}