import styles from "./Logo.module.scss";
import logoImage from "assets/global/logo-placeholder.svg";

const Logo = ({ className }) => {
  return (
    <img
      src={logoImage}
      alt="Rolling Block logo"
      className={`${styles.logo}${className ? className : ""}`}
    />
  );
};

export default Logo;
