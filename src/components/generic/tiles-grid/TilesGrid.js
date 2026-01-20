import styles from "./TilesGrid.module.scss";


const TilesGrid = ({ className, variant, noOfColumns, children }) => {
  const columnClass = noOfColumns ? `tiles-grid--${noOfColumns}-col` : "";

  return (
    <div className={`${styles["tiles-grid__outer"]}`}>
        <div
        className={`${styles["tiles-grid"]} ${styles[columnClass]} ${className ? className : ""} ${
          variant ? styles[variant] : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default TilesGrid;
