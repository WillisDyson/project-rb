import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";
import TextDropdown from "../generic/text-dropdown/TextDropdown";
import TextLink from "../generic/text-link/TextLink";
// import ButtonLink from "../generic/button-link/ButtonLink";
import Logo from "../generic/logo/Logo";
import { navDropdownData, navLinks } from "data/navbar/navbarData";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      {location.pathname !== "/" && <Link to="/"><Logo className={styles.nav__logo} /></Link>}
      {navDropdownData.map((dropdown) => (
        <TextDropdown
          key={dropdown.text}
          text={dropdown.text}
          linksData={dropdown.linksData}
        />
      ))}
       {navLinks.links.map((link) => (
        <TextLink key={`${link.href}-${link.text}`} text={link.text} href={link.href} />
        ))}
      {/* {navLinks.buttons.map((button) => (
        <ButtonLink key={`${button.href}-${button.text}`} variant={"button--nav"} text={button.text} href={button.href} />
      ))} */}
    </nav>
  );
};

export default NavBar;
