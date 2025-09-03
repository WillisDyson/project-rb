import { useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Dropdown from "../global/dropdown/Dropdown";
import TextLink from "../global/link/TextLink";
import Button from "../global/contact-button/Button";
import NavLogo from "./nav-logo/NavLogo";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      {location.pathname !== "/" && <NavLogo href="/" />}
      <Dropdown text={"All services"} />
      <TextLink text={"About us"} href="/about" />
      <TextLink text={"Case studies"} href="/case-studies" />
      <TextLink text={"Blog"} href="/blog" />
      <Button variant={"button--nav"} text={"Get in touch"} href="/contact" />
    </nav>
  );
};

export default NavBar;
