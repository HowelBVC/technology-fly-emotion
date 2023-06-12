import React from "react";
import { graphql } from "gatsby";
import SubpageWrapper from "../../../components/wrappers/Subpage.component";

const Index = ({ data }) => (
   <SubpageWrapper image={data.realizzazioni1.childImageSharp} header="Aerobosco">
      <p>
         Parco avventura con diversi livelli di difficolta' in modo da permettere ad adulti e bambini di divertirsi e trascorrere una giornata nella natura: ponti tibetani, mini zipline, reti per arrampicarsi, un entusiasmante salto di tarzan e tanti altri giochi acrobatici.
      </p>
      <p>
         Contattaci e raccontaci il tuo progetto:
      </p>
   </SubpageWrapper>
);

export default Index;
export const Head = () => <title>Realizzazioni - Aerobosco</title>

export const fluidImage = graphql`
fragment fluidImage on File {
   childImageSharp {
     gatsbyImageData
   }
 }`;

export const pageQuery = graphql`
query {
   realizzazioni1: file(relativePath: {eq: "realizzazioni/realizzazioni-1.png"}) {
     ...fluidImage
   }
 }
`