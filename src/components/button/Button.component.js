import React from "react";
import * as styles from "./Button.module.css";
import { navigate } from "gatsby";

const Button = ({ path, children }) => {
   const handleClick = (path) => navigate(path);

   return (
      <div onClick={() => handleClick(path)} className={styles.button}>
         <p>{children}</p>
      </div >
   );
}

export default Button;