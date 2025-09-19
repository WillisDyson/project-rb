import styles from "./HeroHeader.module.scss";
import Logo from "components/global/logo/Logo";
import Button from "components/global/button/Button";
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
          <h1>{headerText}</h1>
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
