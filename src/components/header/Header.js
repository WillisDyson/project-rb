import H1Text from "components/header/h1-text/H1Text";
import styles from "./Header.module.scss";

const Header = ({ className, variant, headerText }) => {
  return (
    <div
      className={`${className ? className : ""}${
        styles.header ? styles.header : ""
      }${variant ? styles[variant] : ""}`}
    >
      <H1Text variant={"h1--subpage"}>{headerText}</H1Text>
    </div>
  );
};

export default Header;
