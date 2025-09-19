import styles from "./TilesGrid.module.scss";

const TilesGrid = ({ className, variant, children }) => {
  return (
    <div
      className={`${styles["tiles-grid"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      {children}
    </div>
  );
};

export default TilesGrid;
