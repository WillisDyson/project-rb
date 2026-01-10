import styles from "./ButtonLink.module.scss";
import { Link } from "react-router-dom";

const Button = ({ className, text, href, variant, imgUrl, imgAlt }) => {
  return (
    <Link
      to={href}
      className={`${styles["button"]} ${className ? `${styles[className]}` : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      {text && text}
      {imgUrl && <img src={imgUrl} alt={imgAlt} />}
    </Link>
  );
};

export default Button;
