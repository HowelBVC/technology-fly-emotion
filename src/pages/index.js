import * as React from "react"
import * as styles from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image"

import { Container, Row, Col } from "react-bootstrap";

const BannerDesktop = () => (
   <section className={`${styles.bannerDesktop} d-none d-md-block`}>
      <Container>
         <StaticImage src="../images/banner.png" alt="Technology Fly Emotion Banner" />
      </Container>
   </section>
);

const BannerMobile = () => (
   <section className={`${styles.bannerMobile} d-block d-md-none`}>
      <Container>
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
      </Container>
   </section>
);

const AboutUsDesktop = () => (
   <section className={`${styles.aboutUsDesktop} d-none d-md-block`}>
      <Container>
         <h1>About Us</h1>
         <p>
            Fly Emotion nasce nel 2010, lanciando sul mercato la sua prima attrazione - l'Aerofune® - nel luglio del 2011, che riscontra subito grande apprezzamento tra il pubblico (Tripadvisor), anche grazie al volo in coppia che viene reso possibile per la prima volta nel mondo.
            Sull'onda dell'esperienza maturata nel settore della progettazione e della gestione delle attrazioni, nel 2018 sviluppa e costruisce una nuova giostra outdoor, la Railzip: un percorso alternato su fune e rotaia ad alto contenuto tecnologico.
         </p>
         <p>
            Oggi Fly Emotion si propone sul mercato come partner a tutto tondo, specializzato nel concepimento, sviluppo e realizzazione di attrazioni e nella loro successiva gestione. Operiamo con modelli di business che vanno dalla consulenza sullo sviluppo territoriale, alla fornitura, al sale; lease-back per soddisfare pienamente le diverse esigenze di imprenditori, enti locali e aziende impegnate nel settore turistico.
         </p>
      </Container>
   </section>
)

const AboutUsMobile = ({ children }) => (
   <section className="d-block d-md-none">
      <Container className={styles.aboutUsMobile}>
         <h1>About Us</h1>
         <p>
            Fly Emotion nasce nel 2010, lanciando sul mercato la sua prima attrazione - l'Aerofune® - nel luglio del 2011, che riscontra subito grande apprezzamento tra il pubblico (Tripadvisor), anche grazie al volo in coppia che viene reso possibile per la prima volta nel mondo.
         </p>
         <p>Scopri di piu'</p>
      </Container>
   </section>
);

const dataServizi = [
   { label: "Ingegneria del territorio" },
   { label: "Studi di fattibilita'" },
   { label: "Progettazione integrata" }
]

const Servizi = () => (
   <section className={styles.servizi}>
      <Container className="text-start text-md-center">
         <h2>I Nostri Servizi</h2>
         <Row className={`${styles.serviziRow} flex-column flex-md-row px-2 px-md-0`}>
            {dataServizi.map(({ label }, index) => (
               <Col key={index} className={`${styles.serviziCard} mx-0 mx-md-2 my-2 my-md-0`}>
                  <Row className="flex-row flex-md-column">
                     {/* Image Area */}
                     <Col className="order-1 order-md-0 px-0">
                        <StaticImage
                           src="../images/servizi-0.png"
                           alt="Technology Fly Emotion"
                           placeholder="blurred"
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

export default function MainPage() {
   return (
      <React.Fragment>
         <BannerDesktop />
         <BannerMobile />
         <AboutUsDesktop />
         <AboutUsMobile />
         <Servizi />
      </React.Fragment>
   );
}

export const Head = () => <title>Home Page</title>
