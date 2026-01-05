import styles from "./SmallPrint.module.scss";
import Logo from "components/generic/logo/Logo";
import { smallPrintData } from "data/footer/footerData";

const SmallPrint = ({ className, variant, ariaLabel }) => {
  return (
    <div className={`${styles["small-print-wrap"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""}`} aria-label={`${smallPrintData.ariaLabel}`}>
        <div className={styles["small-print__inner"]}>
          <Logo className={`${styles["small-print__logo"]}`} />
          <small className={`${styles["small-print"]}`}>
            {smallPrintData.text.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </small>
        </div>
    </div>
  );
};

export default SmallPrint;
