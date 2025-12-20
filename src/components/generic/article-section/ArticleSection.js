import styles from "./ArticleSection.module.scss";

const ArticleSection = ({ className, variant, children }) => {
  return (
    <div
      className={`${styles["article-section"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""}`}
    >
      {children}
    </div>
  );
};

export default ArticleSection;
