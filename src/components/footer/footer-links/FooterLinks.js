import styles from "./FooterLinks.module.scss";

const FooterLinks = ({ className, variant }) => {
  return (
    <div className={`${styles["footer-links"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""}`}>
        <div className={styles["footer-links__column"]}>
          <h3 className={styles["footer-links__header"]}>Legal stuff</h3>
          <ul className={styles["footer-links__list"]}>
            <li className={styles["footer-links__item"]}><a href="/about" className={styles["footer-links__link"]}>Terms & Conditions</a></li>
          </ul>
        </div>
    </div>
  );
};

export default FooterLinks;
