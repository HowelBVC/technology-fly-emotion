import React from "react";
import * as styles from "./Button.module.css";

const Button = ({ onClick, children }) => (
   <div onClick={onClick} className={styles.button}>
      <p>{children}</p>
   </div >
);

export default Button;