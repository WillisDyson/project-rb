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
        <Logo variant={"logo--hero"} />
        <h1 className={`${styles.hero__title}`}>{headerText}</h1>
        <ButtonLink
          text={buttonText}
          variant={"button--hero"}
          url={buttonUrl}
        />
    </header>
  );
};

export default HeroHeader;
