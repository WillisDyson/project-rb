import styles from "./Logo.module.scss";
import logoImage from "assets/global/logo/rb-logo-outline.svg";

const Logo = ({ className, variant }) => {
  return (
    <img
      src={logoImage}
      alt="Rolling Block logo"
      title="Rolling Block"
      className={`${styles.logo} ${className || ""} ${
        variant ? styles[variant] : ""
      }`}
    />
  );
};

export default Logo;
