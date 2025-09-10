import styles from "./H1Text.module.scss";

const H1Text = ({ className, variant, children }) => {
  return (
    <h1
      className={`${className ? className : ""}${styles.h1} ${
        variant ? styles[variant] : ""
      }`}
    >
      {children}
    </h1>
  );
};

export default H1Text;
