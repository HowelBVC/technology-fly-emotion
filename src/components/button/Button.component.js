import React from "react";
import * as styles from "./Button.module.css";

const Button = ({ children }) => (
   <div className={styles.button}>
      <a href="#">
         <p>{children}</p>
      </a>
   </div >
);

export default Button;