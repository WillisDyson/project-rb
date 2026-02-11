import styles from "./FullWidthImage.module.scss";

const FullWidthImage = ({ className, variant, imageUrl, altText }) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      title={altText}
      className={`${styles["full-width-image"]} ${className || ""} ${
        variant ? styles[variant] : ""
      }`}
    />
  );
};

export default FullWidthImage;
