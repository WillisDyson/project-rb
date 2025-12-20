import { useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";
import TextDropdown from "../generic/text-dropdown/TextDropdown";
import TextLink from "../generic/text-link/TextLink";
import ButtonLink from "../generic/button-link/ButtonLink";
import Logo from "../generic/logo/Logo";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      {location.pathname !== "/" && <Logo href="/" />}
      <TextDropdown text={"All services"} />
      <TextLink text={"About us"} href="/about" />
      <TextLink text={"Case studies"} href="/case-studies" />
      <TextLink text={"Blog"} href="/blog" />
      {/* <ButtonLink variant={"button--nav"} text={"Get in touch"} href="/contact" /> */}
    </nav>
  );
};

export default NavBar;
