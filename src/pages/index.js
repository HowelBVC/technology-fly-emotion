import * as React from "react"
import * as styles from "./index.module.css";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby';
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => (
   <section className={styles.banner}>
      <Container>
         <div className="d-none d-md-block">
            <StaticImage src="../images/banner.png" alt="Technology Fly Emotion Banner" />
         </div>
         <div className="d-block d-md-none">
            <h1>Technology Fly Emotion</h1>
            <div className={styles.bannerButtonRow}>
               <div className={styles.bannerButton}>
                  <p>About Us</p>
               </div>
               <div className={styles.bannerButton}>
                  <p>Contattaci</p>
               </div>
            </div>
            <div className={styles.bannerButtonRow} style={{ marginRight: "36px" }}>
               <div className={styles.bannerButton}>
                  <p>Servizi</p>
               </div>
               <div className={styles.bannerButton}>
                  <p>Realizzazioni</p>
               </div>
            </div>
         </div>
      </Container>
   </section>
);

const AboutUs = () => (
   <section className={styles.aboutUs}>
      <Container>
         <h1>About Us</h1>
         <p>
            Fly Emotion nasce nel 2010, lanciando sul mercato la sua prima attrazione - l'Aerofune® - nel luglio del 2011, che riscontra subito grande apprezzamento tra il pubblico (Tripadvisor), anche grazie al volo in coppia che viene reso possibile per la prima volta nel mondo.
            Sull'onda dell'esperienza maturata nel settore della progettazione e della gestione delle attrazioni, nel 2018 sviluppa e costruisce una nuova giostra outdoor, la Railzip: un percorso alternato su fune e rotaia ad alto contenuto tecnologico.
         </p>
         <p className="d-none d-md-block">
            Oggi Fly Emotion si propone sul mercato come partner a tutto tondo, specializzato nel concepimento, sviluppo e realizzazione di attrazioni e nella loro successiva gestione. Operiamo con modelli di business che vanno dalla consulenza sullo sviluppo territoriale, alla fornitura, al sale; lease-back per soddisfare pienamente le diverse esigenze di imprenditori, enti locali e aziende impegnate nel settore turistico.
         </p>
      </Container>
   </section>
)

const dataServizi = [
   { label: "Ingegneria del territorio" },
   { label: "Studi di fattibilita'" },
   { label: "Progettazione integrata" }
]

const Servizi = ({ data }) => (
   <section className={styles.servizi}>
      <Container className="text-start text-md-center">
         <h2>I Nostri Servizi</h2>
         <Row className={`${styles.serviziRow} flex-column flex-md-row px-2 px-md-0`}>
            {dataServizi.map(({ label }, index) => (
               <Col key={index} className={`${styles.serviziCard} mx-0 mx-md-2 my-2 my-md-0`}>
                  <Row className="flex-row flex-md-column">
                     {/* Image Area */}
                     <Col className="order-1 order-md-0 px-0">
                        <GatsbyImage
                           image={getImage(data.allFile.nodes[index])}
                           alt="Technology Fly Emotion"
                        />
                     </Col>
                     {/* Text Area */}
                     <Col className={`${styles.serviziCardInner} order-0 order-md-1`}>
                        <h4 className="d-none d-md-block">{label}</h4>
                        <h3 className="d-block d-md-none">{label}</h3>
                     </Col>
                  </Row>
               </Col>
            ))}
         </Row>
      </Container>
   </section>
);

const dataRealizzazioni = [
   { label: "Aerofune", text: "Parco avventura con diversi livelli di difficolta' in modo da permettere ad adulti e bambini di divertirsi e trascorrere una giornata nella natura: ponti tibetani, mini zipline, reti per arrampicarsi, un entusiasmante salto di tarzan e tanti altri giochi acrobatici ." },
   { label: "Aerobosco", text: "Parco avventura con diversi livelli di difficolta' in modo da permettere ad adulti e bambini di divertirsi e trascorrere una giornata nella natura: ponti tibetani, mini zipline, reti per arrampicarsi, un entusiasmante salto di tarzan e tanti altri giochi acrobatici ." },
   { label: "Rail Zip", text: "Rail Zip: unica nel suo genere, ma adatta a tutti. I volatori sono agganciati in sicurezza a un carrello che scorre lungo un binario posto ad un’ altezza da 5 a 50 metri dal suolo, scendendo lungo un pendio in un percorso a pendenza elevata, ma a velocità attenuata dall’andamento a zig-zag. L’attività innovativa, che avrà un minimo impatto dal punto di vista naturalistico e paesaggistico, consentirà a bambini e adulti un’esperienza emozionante." },
   { label: "Altre Attrazioni", text: "A seconda delle esigenze, richieste del cliente e peculiarita' del territorio, siamo in grado di progettare attrazioni ad hoc." }
]

const Realizzazioni = () => (
   <section className={styles.realizzazioni}>
      <Container className="text-start text-md-center">
         <h2>Realizzazioni</h2>
         <Row className="flex-column text-start">
            {dataRealizzazioni.map((item, index) => <CardRealizzazioni key={index} {...item} />)}
         </Row>
      </Container>
   </section>
);

const CardRealizzazioni = ({ label, text }) => (
   <Col className={styles.realizzazioniCard}>
      <Row>
         {/* Text Area */}
         <Col>
            <div className="d-flex flex-row" style={{ marginBottom: "16px" }}>
               <div style={{ height: "72px", width: "8px", backgroundColor: "#FFA51E", marginRight: "20px" }} />
               <h3>{label}</h3>
            </div>
            <p>{text}</p>
         </Col>

         {/* Image Area */}
         <Col>

         </Col>
      </Row>
   </Col>
)

export default function MainPage({ data }) {
   return (
      <React.Fragment>
         <Banner />
         <AboutUs />
         <Servizi data={data} />
         <Realizzazioni />
      </React.Fragment>
   );
}

export const Head = () => <title>Home Page</title>
export const imageQuery = graphql`
query Servizi {
   allFile(filter: {name: {regex: "/servizi/"}}) {
     nodes {
       childImageSharp {
         gatsbyImageData
       }
     }
   }
 }`