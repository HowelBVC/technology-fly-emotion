import React from "react";
import * as styles from "./Topbar.module.css";
import { Container } from "react-bootstrap";

export default function Topbar() {
   return (
      <div className={styles.topbar}>
         <Container>
            <h1>Technology Fly Emotion</h1>
         </Container>
      </div>
   )
}