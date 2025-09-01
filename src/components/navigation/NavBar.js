import styles from "./NavBar.module.scss";
import NavDropdown from "./nav-dropdown/NavDropdown";
import NavLink from "./nav-link/NavLink";
import Button from "../global/contact-button/Button";
import Logo from "../global/logo/Logo";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Logo className={styles["nav__logo"]} />
      <NavDropdown text={"All services"} />
      <NavLink text={"About us"} />
      <NavLink text={"Case studies"} />
      <NavLink text={"Blog"} />
      <Button variant={"button--outline"} text={"Get in touch"} />
    </nav>
  );
};

export default NavBar;
