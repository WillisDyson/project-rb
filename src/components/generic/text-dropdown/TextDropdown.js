import styles from "./TextDropdown.module.scss";
import DropdownItem from "./TextDropdownItem";
import DropdownArrow from "components/generic/dropdown-arrow/DropdownArrow";

const Dropdown = ({ className, variant, text, linksData }) => {
  return (
    <div
      role="button"
      tabIndex="0"
      className={`${className ? className : ""}${styles.dropdown} ${
        variant ? styles[variant] : ""
      }`}
    >
      <div className={styles["dropdown__text"]}>
        <span>
          {text}
        </span>
        <DropdownArrow className={`${styles["dropdown__arrow"]}`} />
      </div>
      <div className={styles["dropdown__menu-outer"]} aria-live="polite">
        <ul className={styles["dropdown__menu"]}>
          {linksData.map((link) => (
            <DropdownItem
              key={`${link.href}-${link.text}`}
              text={link.text}
              href={link.href}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
