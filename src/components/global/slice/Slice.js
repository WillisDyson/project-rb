import H2Text from "components/header/h2-text/H2Text";
import styles from "./Slice.module.scss";

const Slice = ({ className, headerText, variant }) => {
  return (
    <section
      className={`${styles["slice"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      <div className={styles["slice__inner"]}>
        <H2Text>{headerText}</H2Text>
      </div>
    </section>
  );
};

export default Slice;
