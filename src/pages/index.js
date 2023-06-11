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
   servizi0: file(relativePath: {eq: "servizi/servizi-0.png"}) {
     ...fluidImage
   }
   servizi1: file(relativePath: {eq: "servizi/servizi-1.png"}) {
     ...fluidImage
   }
   servizi2: file(relativePath: {eq: "servizi/servizi-2.png"}) {
     ...fluidImage
   }
   realizzazioni0: file(relativePath: {eq: "realizzazioni/realizzazioni-0.png"}) {
    ...fluidImage
   }
   realizzazioni1: file(relativePath: {eq: "realizzazioni/realizzazioni-1.png"}) {
    ...fluidImage
   }
   realizzazioni2: file(relativePath: {eq: "realizzazioni/realizzazioni-2.png"}) {
    ...fluidImage
   }
   realizzazioni3: file(relativePath: {eq: "realizzazioni/realizzazioni-3.png"}) {
    ...fluidImage
   }
 }
`
