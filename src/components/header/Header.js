import H1Text from "components/global/h1-text/H1Text";
import styles from "./Header.module.scss";

const Header = ({ className, variant, headerText }) => {
  return (
    <div
      className={`${className ? className : ""}${styles.header} ${
        variant ? styles[variant] : ""
      }`}
    >
      <H1Text text={headerText} />
    </div>
  );
};

export default Header;
