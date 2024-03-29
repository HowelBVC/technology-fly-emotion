import React from "react";
import { graphql } from "gatsby";
import SubpageWrapper from "../../../components/wrappers/Subpage.component";

const Index = ({ data }) => (
   <SubpageWrapper image={data.altre.childImageSharp} header="Altre Attrazioni">
      <p>
         A seconda delle esigenze, richieste del cliente e peculiarita' del territorio, siamo in grado di progettare attrazioni ad hoc.
      </p>
      <p>
         Contattaci e raccontaci il tuo progetto.
      </p>
   </SubpageWrapper>
);

export default Index;
export const Head = () => <title>Realizzazioni - Altre Attrazioni</title>

export const fluidImage = graphql`
fragment fluidImage on File {
   childImageSharp {
     gatsbyImageData
   }
 }`;

export const pageQuery = graphql`
query {
   altre: file(relativePath: {eq: "realizzazioni/altre.png"}) {
     ...fluidImage
   }
 }
`