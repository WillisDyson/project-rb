import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button = ({ className, text, variant }) => {
  return (
    <Link
      to="/"
      className={`${styles["button"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default Button;
