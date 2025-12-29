import styles from "./ButtonLink.module.scss";
import { Link } from "react-router-dom";

const Button = ({ className, text, href, variant }) => {
  return (
    <Link
      to={href}
      className={`${styles["button"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default Button;
