import styles from "./CtaTile.module.scss";
import ButtonLink from "components/generic/button-link/ButtonLink";

const CtaTile = ({ variant, headerText, buttonText, buttonUrl }) => (
    <div className={`${styles["cta-tile"]} ${variant ? styles[variant] : ""}`}>
      <h2 className={styles["cta-tile__header"]}>{headerText}</h2>
      <ButtonLink
        text={buttonText}
        href={buttonUrl}
        className={styles["cta-tile__button"]}
        variant={"button--hero"}>
        </ButtonLink>
    </div>
  );

export default CtaTile;
