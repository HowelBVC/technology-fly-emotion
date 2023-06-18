import * as React from "react"
import { graphql } from 'gatsby';
import Banner from "../components/pages/index/Banner.component";
import AboutUs from "../components/pages/index/AboutUs.component";
import Servizi from "../components/pages/index/Servizi.component";
import Realizzazioni from "../components/pages/index/Realizzazioni.component";

export default function MainPage({ data }) {
  return (
    <React.Fragment>
      <Banner />
      <AboutUs />
      <Servizi data={data} />
      <Realizzazioni data={data} />
    </React.Fragment>
  );
}

export const Head = () => <title>Home Page</title>
export const fluidImage = graphql`
fragment fluidImage on File {
   childImageSharp {
     gatsbyImageData
   }
 }`;

export const pageQuery = graphql`
query {
   ingegneria: file(relativePath: {eq: "servizi/ingegneria-del-territorio.png"}) {
     ...fluidImage
   }
   studi: file(relativePath: {eq: "servizi/studi-di-fattibilita.png"}) {
     ...fluidImage
   }
   progettazione: file(relativePath: {eq: "servizi/progettazione-integrata.png"}) {
     ...fluidImage
   }
   aerofune: file(relativePath: {eq: "realizzazioni/aerofune.png"}) {
    ...fluidImage
   }
   aerobosco: file(relativePath: {eq: "realizzazioni/aerobosco.png"}) {
    ...fluidImage
   }
   railzip: file(relativePath: {eq: "realizzazioni/railzip.png"}) {
    ...fluidImage
   }
   altre: file(relativePath: {eq: "realizzazioni/altre.png"}) {
    ...fluidImage
   }
 }
`
