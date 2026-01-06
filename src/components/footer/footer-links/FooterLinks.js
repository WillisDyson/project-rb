import styles from "./FooterLinks.module.scss";
import { legalLinksData, socialLinksData } from "data/footer/footerData";

const FooterLinks = ({ className, variant }) => {
  return (
    <div className={`${styles["footer-links"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""}`}>
      <div className={styles["footer-links__inner"]}>
        <div className={styles["footer-links__column"]}>
          <h2 className={styles["footer-links__header"]}>{legalLinksData.headerText}</h2>
          <ul className={`${styles["footer-links__list"]} ${styles["footer-links__list--column"]}`}>
            {legalLinksData.links.map((link) => (
              <li key={`${link.href}-${link.text}`} className={styles["footer-links__item"]}>
                <a href={link.href} className={styles["footer-links__link"]}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["footer-links__column"]}>
          <h2 className={styles["footer-links__header"]}>{socialLinksData.headerText}</h2>
          <ul className={styles["footer-links__list"]}>
            {socialLinksData.links.map((link) => (
              <li key={`${link.href}-${link.alt}`} className={styles["footer-links__item"]}>
                <a href={link.href} className={styles["footer-links__link"]}>
                  <img className={styles["footer-links__logo"]} src={link.imageUrl} alt={link.alt} title={link.title} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
