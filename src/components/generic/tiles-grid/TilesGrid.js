import styles from "./TilesGrid.module.scss";

const TilesGrid = ({ className, variant, tileWidth, wrapItems, children }) => {
  return (
    <div
      className={`${styles["tiles-grid"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""}`}
        style={wrapItems && { flexWrap: "wrap" }}
    >
      {children}
    </div>
  );
};

export default TilesGrid;
