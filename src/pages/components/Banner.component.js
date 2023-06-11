import * as React from "react"
import * as styles from "./Banner.module.css";
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap";

export default function Banner() {
   return (
      <section className={styles.banner}>
         <Container>
            <div className="d-none d-md-block">
               <StaticImage src="../../images/banner.png" alt="Technology Fly Emotion Banner" />
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
}