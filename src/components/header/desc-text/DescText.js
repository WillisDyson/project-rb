import styles from "./DescText.module.scss";

const DescText = ({ className, variant, children }) => {
  return (
    <p
      className={`${className ? className : ""}${styles.desc} ${
        variant ? styles[variant] : ""
      }`}
    >
      {children}
    </p>
  );
};

export default DescText;
