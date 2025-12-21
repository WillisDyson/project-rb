import styles from "./InfoInsert.module.scss";
import ButtonLink from "components/generic/button-link/ButtonLink";

const InfoInsert = ({ className, variants, headerText, mainText, buttonText, buttonUrl }) => {
  return (
    <div
      className={`${styles["info-insert"]} ${className ? className : ""} ${
        variants ? styles[variants] : ""}`}
    >
      {headerText && <h2 className={styles["info-insert__header-text"]}>{headerText}</h2>}
      {mainText && <p className={styles["info-insert__main-text"]}>{mainText}</p>}
      <ButtonLink className="" href={buttonUrl} text={buttonText} variant="" />
    </div>
  );
};

export default InfoInsert;
