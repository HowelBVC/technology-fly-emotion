import React from "react";
import { graphql } from "gatsby";
import ServizioWrapper from "../../../components/wrappers/Servizio.component";

const Index = ({ data }) => (
   <ServizioWrapper image={data.servizi1.childImageSharp} header="Studi di fattibilita'">
      <p>
         Abbiamo esperienza decennale nella rapida ed efficace valutazione di possibili siti per nuove attrazioni, proponendo ogni volta il giusto mix di attrazioni per fare del tuo progetto un successo.
      </p>
      <p>
         Puoi rivolgerti a noi per valutare: fattibilità tecnica, organizzativa, sostenibilità economica, compatibilità urbanistica e ambientale di nuove installazioni nel settore parchi divertimento avventura e per singole attrazioni.
      </p>
      <p>
         Grazie ad avanzati strumenti, siamo infatti in grado di fornire risposte rapide e puntuali, eliminando il più possibile le incognite che, nelle fasi preliminari di un progetto, rappresentano grandi fattori di rischio.
      </p>
      <p>
         Chiamaci per una quotazione, sapremo adattare la nostra risposta alle tue esigenze.
      </p>
   </ServizioWrapper>
);

export default Index;
export const Head = () => <title>Studi di fattibilita'</title>

export const fluidImage = graphql`
fragment fluidImage on File {
   childImageSharp {
     gatsbyImageData
   }
 }`;

export const pageQuery = graphql`
query {
   servizi1: file(relativePath: {eq: "servizi/servizi-1.png"}) {
     ...fluidImage
   }
 }
`