import * as React from "react"
import * as styles from "./AboutUs.module.css";
import { Container } from "react-bootstrap";

export default function AboutUs() {
   return (
      <section className={styles.aboutUs} id="about-us">
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
   );
}