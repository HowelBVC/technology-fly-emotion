import * as React from "react"
import * as styles from "./Realizzazioni.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap";

const dataRealizzazioni = [
   { label: "Aerofune", text: "Parco avventura con diversi livelli di difficolta' in modo da permettere ad adulti e bambini di divertirsi e trascorrere una giornata nella natura: ponti tibetani, mini zipline, reti per arrampicarsi, un entusiasmante salto di tarzan e tanti altri giochi acrobatici ." },
   { label: "Aerobosco", text: "Parco avventura con diversi livelli di difficolta' in modo da permettere ad adulti e bambini di divertirsi e trascorrere una giornata nella natura: ponti tibetani, mini zipline, reti per arrampicarsi, un entusiasmante salto di tarzan e tanti altri giochi acrobatici ." },
   { label: "Rail Zip", text: "Rail Zip: unica nel suo genere, ma adatta a tutti. I volatori sono agganciati in sicurezza a un carrello che scorre lungo un binario posto ad un’ altezza da 5 a 50 metri dal suolo, scendendo lungo un pendio in un percorso a pendenza elevata, ma a velocità attenuata dall’andamento a zig-zag. L’attività innovativa, che avrà un minimo impatto dal punto di vista naturalistico e paesaggistico, consentirà a bambini e adulti un’esperienza emozionante." },
   { label: "Altre Attrazioni", text: "A seconda delle esigenze, richieste del cliente e peculiarita' del territorio, siamo in grado di progettare attrazioni ad hoc." }
]

const Card = ({ label, text, image}) => (
   <Col className={`${styles.card}`}>
      <Row>
         {/* Text Area */}
         <Col className={styles.cardInner}>
            <div className="d-flex flex-row" style={{ marginBottom: "16px" }}>
               <div style={{ height: "72px", width: "8px", backgroundColor: "#FFA51E", marginRight: "20px" }} className="d-none d-md-block"/>
               <h3>{label}</h3>
            </div>
            <p className="d-none d-md-block">{text}</p>
         </Col>

         {/* Image Area */}
         <Col className="px-0">
            <GatsbyImage 
               image={image}
               alt="Technology Fly Emotion"
            />
         </Col>
      </Row>
   </Col>
);

const Realizzazioni = ({ data }) => (
   <section className={styles.realizzazioni}>
      <Container className="text-start text-md-center">
         <h2>Realizzazioni</h2>
         <Row className="flex-column text-start px-2 px-md-0">
            {dataRealizzazioni.map((item, index) => (
               <Card
                  key={index}
                  image={getImage(data[`realizzazioni${index}`].childImageSharp)}
                  {...item}
               />
            ))}
         </Row>
      </Container>
   </section>
);

export default Realizzazioni;
