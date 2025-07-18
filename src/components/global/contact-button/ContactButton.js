import styles from './ContactButton.module.scss';

const ContactButton = ({ className, text }) => {

    return (
        <a href="/" className={`${styles['contact-button']} ${className}`}>
            {text}
        </a>
    )
}

export default ContactButton;