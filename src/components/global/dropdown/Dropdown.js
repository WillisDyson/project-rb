import styles from "./Dropdown.module.scss";
import DropdownItem from "./DropdownItem";

const Dropdown = ({ className, variant, text }) => {
  return (
    <div
      role="button"
      tabIndex="0"
      className={`${className ? className : ""}${styles.dropdown} ${
        variant ? styles[variant] : ""
      }`}
    >
      <span className={styles["dropdown__text"]}>{text}</span>
      <div className={styles["dropdown__menu-outer"]} aria-live="polite">
        <ul className={styles["dropdown__menu"]}>
          <DropdownItem
            text="Web Accessibility audits and testing"
            href="/about"
          />
          <DropdownItem
            text="Web Accessibility audits and testing"
            href="/item1"
          />
          <DropdownItem
            text="Web Accessibility audits and testing"
            href="/item1"
          />
          <DropdownItem
            text="Web Accessibility audits and testing"
            href="/item1"
          />
          <DropdownItem
            text="Web Accessibility audits and testing"
            href="/item1"
          />
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
