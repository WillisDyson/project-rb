import styles from "./HeroHeader.module.scss";
import Logo from "components/generic/logo/Logo";
import ButtonLink from "components/generic/button-link/ButtonLink";
import DownArrowImg from "assets/arrow-button/down-arrow-white.svg";
import { heroInfo } from "data/homepage/homepageData";


const HeroHeader = ({ className, variant, headerText, buttonUrl }) => {
  return (
    <header
      className={`${className ? className : ""}${styles.hero} ${
        variant ? styles[variant] : ""
      }`}
    >
      <div className={`${styles.hero__inner}`}>
        <Logo variant={"logo--hero"} />
        <h1 className={`${styles.hero__title}`}>{headerText}</h1>
        <ButtonLink
          variant={"button--hero"}
          url={buttonUrl}
          imgUrl={DownArrowImg}
          imgAlt="Down arrow"
          href={heroInfo.buttonUrl}
        />
      </div>
    </header>
  );
};

export default HeroHeader;
