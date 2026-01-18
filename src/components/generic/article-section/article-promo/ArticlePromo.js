import styles from "./ArticlePromo.module.scss";
import articleSectionStyles from "../ArticleSection.module.scss";
import ButtonLink from "components/generic/button-link/ButtonLink";

const ArticlePromo = ({ articleUrl, companyName, header, description, linkText, imageUrl, imageAlt, variant }) => (
  <div className={`${styles["article-promo"]} ${variant ? styles[variant] : ""}`}>
    <div className={styles["article-promo__text-section"]}>
      <h3 className={styles["article-promo__header"]}><b>{companyName}:</b> {header}</h3>
      {description && <p className={styles["article-promo__desc"]}>{description}</p>}
      <ButtonLink className={articleSectionStyles["article-section__button"]} href={articleUrl} text={linkText} variant="" />
    </div>
    <div className={styles["article-promo__image-section"]} style={{ backgroundImage: `url(${imageUrl})` }}>
    </div>
  </div>
);

export default ArticlePromo;