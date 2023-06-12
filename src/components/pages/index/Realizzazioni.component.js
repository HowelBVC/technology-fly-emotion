import * as React from "react"
import * as styles from "./Realizzazioni.module.css";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../button/Button.component";

const dataRealizzazioni = [
   { label: "Aerofune", text: "La Zipline Aerofune permette di volare lungo due tratte, diverse per pendenza e lunghezza, da solo o in coppia. Grazie a una speciale imbracatura, si viene assicurati ad un carrello, che scorre liberamente lungo una fune d'acciaio, regalando momenti di pura emozione e panorami mozzafiato. All'arrivo uno speciale sistema frenante permette di rallentare in modo naturale e automatico.", path: "/realizzazioni/aerofune" },
   { label: "Aerobosco", text: "Parco avventura con diversi livelli di difficolta' in modo da permettere ad adulti e bambini di divertirsi e trascorrere una giornata nella natura: ponti tibetani, mini zipline, reti per arrampicarsi, un entusiasmante salto di tarzan e tanti altri giochi acrobatici.", path: "/realizzazioni/aerobosco" },
   { label: "Rail Zip", text: "Rail Zip: unica nel suo genere, ma adatta a tutti. I volatori sono agganciati in sicurezza a un carrello che scorre lungo un binario posto ad un' altezza da 5 a 50 metri dal suolo, scendendo lungo un pendio in un percorso a pendenza elevata, ma a velocità attenuata dall'andamento a zig-zag.", path: "realizzazioni/rail-zip" },
   { label: "Altre Attrazioni", text: "A seconda delle esigenze, richieste del cliente e peculiarita' del territorio, siamo in grado di progettare attrazioni ad hoc.", path: "/realizzazioni/altre-attrazioni" }
]

const Card = ({ label, text, path, image }) => {
   const handleClick = (path) => navigate(path);

   return (
      <Col className={`${styles.card}`}>
         <div onClick={() => handleClick(path)} className={styles.clickable} />
         <Row className="justify-content-between">
            {/* Text Area */}
            <Col xs={6} md={5} className={styles.cardInner}>
               <h3 className="d-md-block d-md-none">{label}</h3>
               <div className="d-none d-md-flex flex-row" style={{ marginBottom: "16px" }}>
                  <div style={{ height: "72px", width: "8px", backgroundColor: "#FFA51E", marginRight: "20px" }} className="d-none d-md-block" />
                  <h3>{label}</h3>
               </div>
               <p className="d-none d-md-block">{text}</p>

               {/* Button Container */}
               <div className="w-100 d-none d-md-flex justify-content-end">
                  <Button path={path}>Scopri di piu'</Button>
               </div>
            </Col>

            {/* Image Area - Desktop */}
            <Col xs={6} md={6} className="px-0 d-none d-md-block">
               <GatsbyImage
                  image={image}
                  alt="Technology Fly Emotion"
               />
            </Col>

            {/* Image Area - Mobile */}
            <GatsbyImage
               image={image}
               alt="Technology Fly Emotion"
               className={`${styles.cardImageArea} d-block d-md-none`}
            />
         </Row>
      </Col>
   );
}

const Realizzazioni = ({ data }) => (
   <section className={styles.realizzazioni} id="realizzazioni">
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
