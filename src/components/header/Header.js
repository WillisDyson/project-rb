import styles from "./Header.module.scss";

const Header = ({ className, variant, headerText, descriptionText }) => {
  return (
    <header
      className={`${className ? className : ""}${
        styles.header ? styles.header : ""
      }${variant ? styles[variant] : ""}`}
    >
      <h1>{headerText}</h1>
      <p>{descriptionText}</p>
    </header>
  );
};

export default Header;
