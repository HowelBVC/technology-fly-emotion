import * as React from "react"
import * as styles from "./index.module.css";
import DesktopWrapper from "../components/wrappers/DesktopWrapper.component";
import MobileWrapper from "../components/wrappers/MobileWrapper.component";
import { Container, Row, Col } from "react-bootstrap";

const BannerDesktop = () => (
   <DesktopWrapper className={`${styles.bannerDesktop}`}>

   </DesktopWrapper>
);

const BannerMobile = () => (
   <section className={`${styles.bannerMobile} d-block d-lg-none`}>
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
   <DesktopWrapper className={styles.aboutUsDesktop}>
      <h1>About Us</h1>
      <p>
         Fly Emotion nasce nel 2010, lanciando sul mercato la sua prima attrazione - l'Aerofune® - nel luglio del 2011, che riscontra subito grande apprezzamento tra il pubblico (Tripadvisor), anche grazie al volo in coppia che viene reso possibile per la prima volta nel mondo.
         Sull'onda dell'esperienza maturata nel settore della progettazione e della gestione delle attrazioni, nel 2018 sviluppa e costruisce una nuova giostra outdoor, la Railzip: un percorso alternato su fune e rotaia ad alto contenuto tecnologico.
      </p>
      <p>
         Oggi Fly Emotion si propone sul mercato come partner a tutto tondo, specializzato nel concepimento, sviluppo e realizzazione di attrazioni e nella loro successiva gestione. Operiamo con modelli di business che vanno dalla consulenza sullo sviluppo territoriale, alla fornitura, al sale; lease-back per soddisfare pienamente le diverse esigenze di imprenditori, enti locali e aziende impegnate nel settore turistico.
      </p>
   </DesktopWrapper>
)

const AboutUsMobile = () => (
   <MobileWrapper className={styles.aboutUsMobile}>
      <h1>About Us</h1>
      <p>
         Fly Emotion nasce nel 2010, lanciando sul mercato la sua prima attrazione - l'Aerofune® - nel luglio del 2011, che riscontra subito grande apprezzamento tra il pubblico (Tripadvisor), anche grazie al volo in coppia che viene reso possibile per la prima volta nel mondo.
      </p>
      <p>Scopri di piu'</p>
   </MobileWrapper>
)

export default function MainPage() {
   return (
      <React.Fragment>
         <BannerDesktop />
         <BannerMobile />
         <AboutUsDesktop />
         <AboutUsMobile />
      </React.Fragment>
   );
}

export const Head = () => <title>Home Page</title>
