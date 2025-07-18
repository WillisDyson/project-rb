import styles from './Logo.module.scss';
import logoImage from 'assets/global/logo-placeholder.svg';

const Logo = () => {

    return (
        <img src={logoImage} alt="Logo" className={styles.logo} />
    )
}

export default Logo;