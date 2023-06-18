import React from "react";
import { graphql } from "gatsby";
import SubpageWrapper from "../../../components/wrappers/Subpage.component";

const Index = ({ data }) => (
   <SubpageWrapper image={data.railzip.childImageSharp} header="Railzip">
      <p>
         Rail Zip: unica nel suo genere, ma adatta a tutti. I volatori sono agganciati in sicurezza a un carrello che scorre lungo un binario posto ad un' altezza da 5 a 50 metri dal suolo, scendendo lungo un pendio in un percorso a pendenza elevata, ma a velocità attenuata dall'andamento a zig-zag. L'attività innovativa, che avrà un minimo impatto dal punto di vista naturalistico e paesaggistico, consentirà a bambini e adulti un'esperienza emozionante.
      </p>
      <p>
         Contattaci e raccontaci il tuo progetto:
      </p>
   </SubpageWrapper>
);

export default Index;
export const Head = () => <title>Realizzazioni - Railzip</title>

export const fluidImage = graphql`
fragment fluidImage on File {
   childImageSharp {
     gatsbyImageData
   }
 }`;

export const pageQuery = graphql`
query {
   railzip: file(relativePath: {eq: "realizzazioni/railzip.png"}) {
     ...fluidImage
   }
 }
`