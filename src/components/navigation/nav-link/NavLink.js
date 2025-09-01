import styles from "./NavLink.module.scss";

const NavLink = ({ className, variant, text }) => {
  return (
    <a
      className={`${className ? className : ""}${styles.link} ${
        variant ? styles[variant] : ""
      }`}
    >
      {text}
    </a>
  );
};

export default NavLink;
