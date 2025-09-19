import styles from "./Header.module.scss";

const Header = ({ className, variant, headerText, descText }) => {
  return (
    <header
      className={`${className ? className : ""}${
        styles.header ? styles.header : ""
      }${variant ? styles[variant] : ""}`}
    >
      <h1>{headerText}</h1>
      <p>{descText}</p>
    </header>
  );
};

export default Header;
