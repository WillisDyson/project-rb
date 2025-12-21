import styles from "./Slice.module.scss";

const Slice = ({ className, headerText, variant, children }) => {
  return (
    <section
      className={`${styles["slice"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      <div className={styles["slice__inner"]}>
        {headerText && <h2>{headerText}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Slice;
