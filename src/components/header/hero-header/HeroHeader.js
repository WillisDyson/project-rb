import styles from "./HeroHeader.module.scss";
import Logo from "components/global/logo/Logo";
import Button from "components/global/button/Button";
import H1Text from "components/header/h1-text/H1Text";
import TextLink from "components/global/link/TextLink";
import HeroImage from "./hero-image/HeroImage";

const HeroHeader = ({ className, variant, headerText }) => {
  return (
    <header
      className={`${className ? className : ""}${styles.hero} ${
        variant ? styles[variant] : ""
      }`}
    >
      <div className={`${styles.hero__content}`}>
        <div className={`${styles.hero__text}`}>
          <Logo variant={"logo--hero"} />
          <H1Text>{headerText}</H1Text>
          <Button variant={"button--hero"} text={"Get in touch"} />
          <TextLink
            href={"#services"}
            text={"See our services"}
            variant={"link--hero"}
          />
        </div>
        <div className={`${styles.hero__imagewrap}`}>
          <HeroImage
            alt={
              "Greyscale woman smiling, looking down at a bright red smartphone that she is holding."
            }
          />
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;

// Test
