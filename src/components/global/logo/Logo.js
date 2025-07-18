import styles from './Logo.module.scss';
import logoImage from 'assets/global/logo-placeholder.svg';

const Logo = ({ className }) => {

    return (
        <img src={logoImage} alt="Logo" className={className} />
    )
}

export default Logo;