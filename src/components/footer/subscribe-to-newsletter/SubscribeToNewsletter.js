import styles from "./SubscribeToNewsletter.module.scss";
import ButtonLink from "components/generic/button-link/ButtonLink";
import { subscribeToNewsletterData } from "data/footer/footerData";

const SubscribeToNewsletter = ({ className, variant, buttonUrl, buttonText }) => {
  return (
    <div className={`${styles["subscribe-to-newsletter"]} ${className ? className : ""} ${
        variant ? styles[variant] : ""}`}>
      <h2 className={styles["subscribe-to-newsletter__header"]}>{subscribeToNewsletterData.headerText}</h2>
      <ButtonLink className={styles["subscribe-to-newsletter__button"]} href={subscribeToNewsletterData.buttonUrl} text={subscribeToNewsletterData.buttonText} variant="" />
    </div>
  );
};

export default SubscribeToNewsletter;
