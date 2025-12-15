import styles from "./Tile.module.scss";

const Tile = ({ imageUrl, imageAlt, header, description }) => (
  <div className={styles.tile}>
    {imageUrl && (
      <img src={imageUrl} alt={imageAlt || ""} className={styles.tile__img} />
    )}
      <div className={styles["tile__header-wrap"]}></div>
      <h3 className={styles.tile__header}>{header}</h3>
      {description && <p className={styles.tile__desc}>{description}</p>}
  </div>
);

export default Tile;
