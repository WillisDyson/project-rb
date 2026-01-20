import styles from "./Slice.module.scss";

const Slice = ({ className, headerText, descriptionText, variant, children, id }) => {
  return (
    <section
      className={`${styles["slice"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      <div id={id} className={styles["slice__inner"]}>
        {headerText && <h2 className={styles["slice__header"]}>{headerText}</h2>}
        {descriptionText && <p className={styles["slice__desc"]}>{descriptionText}</p>}
        {children}
      </div>
    </section>
  );
};

export default Slice;
