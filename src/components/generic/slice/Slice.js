import styles from "./Slice.module.scss";

const Slice = ({ className, headerText, variant, children, id }) => {
  return (
    <section
      className={`${styles["slice"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      <div id={id} className={styles["slice__inner"]}>
        {headerText && <h2>{headerText}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Slice;
