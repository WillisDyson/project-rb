import styles from "./TextDropdownItem.module.scss";
import { Link } from "react-router-dom";

const DropdownItem = ({ className, variant, text, href }) => {
  const handleClick = (e) => {
    e.currentTarget.blur();
  };

  return (
    <li className={styles["dropdown-item"]}>
      <Link
        to={href}
        className={`${className ? className : ""} ${
          variant ? styles[variant] : ""
        }`}
        onClick={handleClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default DropdownItem;
