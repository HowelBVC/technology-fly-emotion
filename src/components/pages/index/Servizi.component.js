import * as React from "react"
import * as styles from "./Servizi.module.css";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap";

const cardData = [
   { label: "Ingegneria del territorio", path: "/servizi/ingegneria-del-territorio" },
   { label: "Studi di fattibilita'", path: "/servizi/studi-di-fattibilita" },
   { label: "Progettazione integrata", path: "/servizi/progettazione-integrata" }
]

const Card = ({ label, path, index, image }) => {
   const handleClick = (path) => navigate(path);

   return (
      <Col onClick={() => handleClick(path)} key={index} className={`${styles.card} mx-0 mx-md-2 my-2 my-md-0`}>
         <Row className="flex-row flex-md-column">
            {/* Text Area */}
            <Col className={`${styles.cardInner} order-0 order-md-1`}>
               <h4 className="d-none d-md-block">{label}</h4>
               <h3 className="d-block d-md-none">{label}</h3>
            </Col>

            {/* Image Area */}
            <GatsbyImage
               image={image}
               alt="Technology Fly Emotion"
               className={`${styles.cardImageArea} order-1 order-md-0 px-0`}
            />
         </Row>
      </Col>
   );
}

const Servizi = ({ data }) => (
   <section className={styles.servizi} id="servizi">
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

