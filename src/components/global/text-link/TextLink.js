import styles from "./TextLink.module.scss";
import { Link } from "react-router-dom";

const TextLink = ({ className, variant, text, href }) => {
  return (
    <Link
      to={href}
      className={`${className ? className : ""}${styles.link} ${
        variant ? styles[variant] : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default TextLink;
