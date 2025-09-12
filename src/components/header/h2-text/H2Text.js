import styles from "./H2Text.module.scss";

const H2Text = ({ className, variant, children }) => {
  return (
    <h2
      className={`${className ? className : ""}${styles.h2} ${
        variant ? styles[variant] : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default H2Text;
