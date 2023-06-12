import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./Subpage.module.css";

const Banner = ({ image, header, children }) => (
   <section className={styles.banner}>
      <Container>
         <Row>
            {/* Image Area */}
            <Col>
               <Row>
                  <Col xs={6} className={`${styles.bannerMobile} d-flex align-items-center d-md-none`}>
                     <h3>{header}</h3>
                  </Col>
                  <Col xs={6} md="auto" className="px-0">
                     <GatsbyImage
                        image={getImage(image)}
                        alt="Technology Fly Emotion - Ingegneria del territorio"
                        className={styles.image}
                     />
                  </Col>
               </Row>
            </Col>

            {/* Text Area */}
            <Col xs={12} md={7} className={styles.textArea}>
               <div className="d-none d-md-flex flex-row" style={{ marginBottom: "16px" }}>
                  <div style={{ height: "72px", width: "8px", backgroundColor: "#FFA51E", marginRight: "20px" }} className="d-none d-md-block" />
                  <h3>{header}</h3>
               </div>
               {children}
            </Col>
         </Row>
      </Container>
   </section>
);

const SubpageWrapper = (props) => <Banner {...props} />

export default SubpageWrapper;