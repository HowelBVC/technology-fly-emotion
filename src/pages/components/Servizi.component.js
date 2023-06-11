import * as React from "react"
import * as styles from "./Servizi.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap";

const cardData = [
   { label: "Ingegneria del territorio" },
   { label: "Studi di fattibilita'" },
   { label: "Progettazione integrata" }
]

const Card = ({ label, index, image }) => (
   <Col key={index} className={`${styles.card} mx-0 mx-md-2 my-2 my-md-0`}>
      <Row className="flex-row flex-md-column">
         {/* Image Area */}
         <Col className="order-1 order-md-0 px-0">
            <GatsbyImage
               image={image}
               alt="Technology Fly Emotion"
            />
         </Col>
         {/* Text Area */}
         <Col className={`${styles.cardInner} order-0 order-md-1`}>
            <h4 className="d-none d-md-block">{label}</h4>
            <h3 className="d-block d-md-none">{label}</h3>
         </Col>
      </Row>
   </Col>
);

const Servizi = ({ data }) => (
   <section className={styles.servizi}>
      <Container className="text-start text-md-center">
         <h2>I Nostri Servizi</h2>
         <Row className={`${styles.serviziRow} flex-column flex-md-row px-2 px-md-0`}>
            {cardData.map((item, index) => <Card
               key={index}
               index={index}
               image={getImage(data[`servizi${index}`].childImageSharp)}
               {...item}
            />)}
         </Row>
      </Container>
   </section>
);

export default Servizi;

