import { useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Dropdown from "../global/dropdown/Dropdown";
import TextLink from "../global/link/TextLink";
import ButtonLink from "../global/button-link/ButtonLink";
import Logo from "../global/logo/Logo";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      {location.pathname !== "/" && <Logo href="/" />}
      <Dropdown text={"All services"} />
      <TextLink text={"About us"} href="/about" />
      <TextLink text={"Case studies"} href="/case-studies" />
      <TextLink text={"Blog"} href="/blog" />
      {/* <ButtonLink variant={"button--nav"} text={"Get in touch"} href="/contact" /> */}
    </nav>
  );
};

export default NavBar;
