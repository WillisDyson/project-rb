import styles from "./NavLogo.module.scss";
import logoImage from "assets/global/rb-logo.svg";
import { Link } from "react-router-dom";

const NavLogo = ({ className, variant, href }) => {
  return (
    <Link to={href}>
      <img
        src={logoImage}
        alt="Rolling Block logo"
        className={`${styles.navlogo}${className ? className : ""} ${
          variant ? styles[variant] : ""
        }`}
      />
    </Link>
  );
};

export default NavLogo;
