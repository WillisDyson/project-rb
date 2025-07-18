import styles from './NavBar.module.scss';
import NavDropdown from './nav-dropdown/NavDropdown';
import ContactButton from '../global/contact-button/ContactButton';
import Logo from '../global/logo/Logo';

const NavBar = () => {

    return (
        <nav className={styles.nav}>
            <NavDropdown variant={'dropdown--bold'} text={"Our services"} />
            <Logo className={styles['nav__logo']} />
            <NavDropdown text={"More info"} />
            <ContactButton className={styles['nav__contact-button']} text={"See our services"} />
        </nav>
    )
}

export default NavBar;