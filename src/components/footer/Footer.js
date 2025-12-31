import styles from "./Footer.module.scss";
import SubscribeToNewsletter from "./subscribe-to-newsletter/SubscribeToNewsletter";
import FooterLinks from "./footer-links/FooterLinks";
import SmallPrint from "./small-print/SmallPrint";

const Footer = ({ className, variant }) => {
  return (
    <footer className={`${styles["footer"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""}`}>
      <SubscribeToNewsletter />
      <FooterLinks />
      <SmallPrint />
    </footer>
  );
};

export default Footer;
