import styles from "./ButtonLink.module.scss";
import { Link } from "react-router-dom";

const Button = ({ className, text, href, variant, arrow, imgAlt }) => {
  return (
    <Link
      to={href}
      className={`${styles["button"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      {text && text}
      {arrow && 
      <svg className={styles["button__arrow"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 15.292" aria-label={imgAlt} role="img">
        <path d="M16,8.9,14.943,7.845,10.75,12.03V-.39H9.25V12.03L5.065,7.838,4,8.9l6,6Z" transform="translate(-4 0.39)"/>
      </svg>
}
    </Link>
  );
};

export default Button;
