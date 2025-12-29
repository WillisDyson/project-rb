import styles from "./HeroHeader.module.scss";
import Logo from "components/generic/logo/Logo";
import ButtonLink from "components/generic/button-link/ButtonLink";

const HeroHeader = ({ className, variant, headerText, buttonText, buttonUrl }) => {
  return (
    <header
      className={`${className ? className : ""}${styles.hero} ${
        variant ? styles[variant] : ""
      }`}
    >
      <div className={`${styles.hero__content}`}>
        <div className={`${styles.hero__text}`}>
          <Logo variant={"logo--hero"} />
          <h1 className={`${styles.hero__button}`}>{headerText}</h1>
          <ButtonLink
            text={buttonText}
            className={`${styles.hero__button}`}
            variant={"button--hero"}
            url={buttonUrl}
          />
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
