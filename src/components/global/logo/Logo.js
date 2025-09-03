import styles from "./Logo.module.scss";
import logoImage from "assets/global/logo-placeholder.png";

const Logo = ({ className, variant }) => {
  return (
    <img
      src={logoImage}
      alt="Rolling Block logo"
      className={`${styles.logo}${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    />
  );
};

export default Logo;
