import React from "react";
import * as styles from "./Contatti.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../images/svg/logo_bianco.svg";

const Header = () => (
   <div className="d-none d-md-flex flex-row" style={{ marginBottom: "16px" }}>
      <div style={{ height: "86px", width: "8px", backgroundColor: "#FFA51E", marginRight: "20px" }} className="d-none d-md-block" />
      <Row>
         <h3>Technology Fly Emotion S.r.l. - A Socio Unico</h3>
         <p style={{ margin: "0px" }}>Societa' di Ingegneria</p>
      </Row>
   </div>
);

const Contatti = () => (
   <section id="contatti" className={styles.contatti}>
      <Container className={styles.card}>
         <Row>
            <Col md={2} className="mb-4 d-none d-md-block">
               <Logo />
            </Col>
            <Header />
            <div className="d-md-none">
               <h3>Technology Fly Emotion S.r.l. - A Socio Unico</h3>
               <p>Societa' di Ingegneria</p>
            </div>
            <p>Via Ceresola 164, Talamona (SO)</p>
            <p>tecnico@flyemotion.com</p>
            <p>+39 0342 613819</p>
            <p>©2023 by Fly Emotion S.r.l.</p>
         </Row>
      </Container>
   </section>
);

export default Contatti;