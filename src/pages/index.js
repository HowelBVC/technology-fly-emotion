import * as React from "react"
import { graphql } from 'gatsby';
import Banner from "./components/Banner.component";
import AboutUs from "./components/AboutUs.component";
import Servizi from "./components/Servizi.component";
import Realizzazioni from "./components/Realizzazioni.component";

export default function MainPage({ data }) {
   return (
      <React.Fragment>
         <Banner />
         <AboutUs />
         <Servizi data={data} />
         <Realizzazioni />
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
   servizi0: file(relativePath: {eq: "servizi/servizi-0.png"}) {
     ...fluidImage
   }
   servizi1: file(relativePath: {eq: "servizi/servizi-1.png"}) {
     ...fluidImage
   }
   servizi2: file(relativePath: {eq: "servizi/servizi-2.png"}) {
     ...fluidImage
   }
 }
`
