import styles from "./HeroHeader.module.scss";
import Logo from "components/global/logo/Logo";
import Button from "../global/contact-button/Button";
import H1Text from "components/global/h1-text/H1Text";
import TextLink from "components/global/link/TextLink";
import HeroImage from "./hero-image/HeroImage";

const HeroHeader = ({ className, variant, headerText }) => {
  return (
    <div
      className={`${className ? className : ""}${styles.hero} ${
        variant ? styles[variant] : ""
      }`}
    >
      <div className={`${styles.hero__content}`}>
        <div>
          <Logo variant={"logo--hero"} />
          <H1Text>{headerText}</H1Text>
          <Button variant={"button--hero"} text={"Get in touch"} />
          <TextLink href={"#services"} text={"See our services"} />
        </div>
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroHeader;
