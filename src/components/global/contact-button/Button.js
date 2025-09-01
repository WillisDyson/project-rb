import styles from "./Button.module.scss";

const Button = ({ className, text, variant }) => {
  return (
    <a
      href="/"
      className={`${styles["button"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""
      }`}
    >
      {text}
    </a>
  );
};

export default Button;
