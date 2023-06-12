import * as React from "react"
import * as styles from "./Banner.module.css";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap";

const Banner = () => {
   const handleClick = (path) => navigate(path);

   return (
      <section className={styles.banner}>
         <Container>
            <div className="d-none d-md-block">
               <StaticImage src="../../../images/Banner.png" alt="Technology Fly Emotion Banner" />
            </div>
            <div className="d-block d-md-none">
               <h1>Technology Fly Emotion</h1>
               <div className="py-5">
                  <div className={styles.bannerButtonRow}>
                     <div onClick={() => handleClick("#about-us")} className={styles.bannerButton}>
                        <p>About Us</p>
                     </div>
                     <div className={`${styles.bannerButton} ${styles.highlighted}`}>
                        <p>Contattaci</p>
                     </div>
                  </div>
                  <div className={styles.bannerButtonRow} style={{ marginRight: "36px" }}>
                     <div onClick={() => handleClick("#servizi")} className={styles.bannerButton}>
                        <p>Servizi</p>
                     </div>
                     <div onClick={() => handleClick("#realizzazioni")} className={styles.bannerButton}>
                        <p>Realizzazioni</p>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
}

export default Banner;