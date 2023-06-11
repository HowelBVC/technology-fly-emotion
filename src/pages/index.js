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
export const serviziImagesQuery = graphql`
query Servizi {
   allFile(filter: {name: {regex: "/servizi/"}}) {
     nodes {
       childImageSharp {
         gatsbyImageData
       }
     }
   }
 }`
