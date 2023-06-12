import React from "react";
import { graphql } from "gatsby";
import SubpageWrapper from "../../../components/wrappers/Subpage.component";

const Index = ({ data }) => (
   <SubpageWrapper image={data.realizzazioni0.childImageSharp} header="Aerofune">
      <p>
         La Zipline Aerofune permette di volare lungo due tratte, diverse per pendenza e lunghezza, da solo o in coppia. Grazie a una speciale imbracatura, si viene assicurati ad un carrello, che scorre liberamente lungo una fune d'acciaio, regalando momenti di pura emozione e panorami mozzafiato. All'arrivo uno speciale sistema frenante permette di rallentare in modo naturale e automatico.
      </p>
      <p>
         Contattaci e raccontaci il tuo progetto.
      </p>
   </SubpageWrapper>
);

export default Index;
export const Head = () => <title>Realizzazioni - Aerofune</title>

export const fluidImage = graphql`
fragment fluidImage on File {
   childImageSharp {
     gatsbyImageData
   }
 }`;

export const pageQuery = graphql`
query {
   realizzazioni0: file(relativePath: {eq: "realizzazioni/realizzazioni-0.png"}) {
     ...fluidImage
   }
 }
`