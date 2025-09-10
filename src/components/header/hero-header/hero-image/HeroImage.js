import styles from "./HeroImage.module.scss";
import HeroImageSrc from "assets/hero-header/hero-image.png";

const HeroImage = ({ className, variant, alt }) => {
  return (
    <img
      src={HeroImageSrc}
      alt={alt}
      className={`${className ? className : ""}${styles.heroimage} ${
        variant ? styles[variant] : ""
      }`}
    />
  );
};

export default HeroImage;
