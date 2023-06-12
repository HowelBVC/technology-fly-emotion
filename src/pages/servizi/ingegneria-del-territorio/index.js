import React from "react";
import { graphql } from "gatsby";
import SubpageWrapper from "../../../components/wrappers/Subpage.component";

const Index = ({ data }) => (
   <SubpageWrapper image={data.servizi0.childImageSharp} header="Ingegneria del territorio">
      <p>
         Come promuovere e rilanciare una destinazione, utilizzando prodotti e offerte innovative compatibili con l'ecosistema locale?
      </p>
      <p>
         Come generare posti di lavoro locali e trattenere la popolazione residente evitando lo spopolamento?
         La valorizzazione del territorio, scoprendo e rilanciando eccellenze, bellezze architettoniche e paesaggistiche, artigianato e tradizioni, è la risposta che consentirà all'Europa, ed all'Italia in particolar modo, un futuro sostenibile a misura d'uomo.
      </p>
      <p>
         In questo quadro di sviluppo, Fly Emotion aiuta gli enti locali a pianificare il proprio territorio inserendo negli strumenti urbanistici soluzioni di intrattenimento e attrazione ragionate, sostenibili e appetibili per gli investitori.
      </p>
   </SubpageWrapper>
);

export default Index;
export const Head = () => <title>Ingegneria del territorio</title>

export const fluidImage = graphql`
fragment fluidImage on File {
   childImageSharp {
     gatsbyImageData
   }
 }`;

export const pageQuery = graphql`
query {
   servizi0: file(relativePath: {eq: "servizi/servizi-0.png"}) {
     ...fluidImage
   }
 }
`