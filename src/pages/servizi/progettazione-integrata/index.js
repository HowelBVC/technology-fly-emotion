import React from "react";
import { graphql } from "gatsby";
import SubpageWrapper from "../../../components/wrappers/Subpage.component";

const Index = ({ data }) => (
   <SubpageWrapper image={data.progettazione.childImageSharp} header="Progettazione integrata">
      <p>
         l'Ingegneria con approccio a 360 gradi: direttamente e insieme ai nostri partners, affrontiamo tutti gli aspetti tecnici ed economici di un progetto, presentando soluzioni complete e all'avanguardia dal punto di vista dei prodotti finiti.
      </p>
      <p>
         Strumenti di modellazione 3D avanzati, codice proprietario per l'effettuazione di calcoli complessi, FEM, BIM, GIS sono alcuni degli strumenti che utilizziamo tutti i giorni per soddisfare le richieste dei nostri clienti.
      </p>
      <p>
         Hai bisogno di un team di progetto diversificato, con esperti di strutture, geologia, topografia, impiantistica per non lasciare nulla al caso?

         Chiamaci per una valutazione dedicata.
      </p>
   </SubpageWrapper>
);

export default Index;
export const Head = () => <title>Progettazione integrata</title>

export const fluidImage = graphql`
fragment fluidImage on File {
   childImageSharp {
     gatsbyImageData
   }
 }`;

export const pageQuery = graphql`
query {
   progettazione: file(relativePath: {eq: "servizi/progettazione-integrata.png"}) {
     ...fluidImage
   }
 }
`