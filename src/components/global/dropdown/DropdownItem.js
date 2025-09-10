import styles from "./DropdownItem.module.scss";
import { Link } from "react-router-dom";

const DropdownItem = ({ className, variant, text, href }) => {
  return (
    <li className={`${styles.dropdownitem}`}>
      <Link
        to={href}
        className={`${className ? className : ""} ${
          variant ? styles[variant] : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
};

export default DropdownItem;
