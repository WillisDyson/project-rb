import styles from "./Tile.module.scss";

const Tile = ({ imageUrl, imageAlt, header, description, variant, colour }) => (
  <div className={styles["tile__outer"]}>

    <div className={`${styles.tile} ${variant ? styles[variant] : ""} ${colour ? styles[`tile--${colour}`] : ""}`}>
        <div className={styles["tile__header-wrap"]}>
          {imageUrl && (
            <div className={styles["tile__image-wrap"]}>
              <img src={imageUrl} alt={imageAlt || ""} className={styles.tile__image} />
            </div>
          )}
          <h3 className={styles.tile__header}>{header}</h3>
        </div>
        {description && <p className={styles.tile__desc}>{description}</p>}
    </div>
  </div>
  );

export default Tile;
