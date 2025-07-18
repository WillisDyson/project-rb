import styles from './NavBar.module.scss';
import NavDropdown from './nav-dropdown/NavDropdown';
import Logo from '../global/logo/Logo';

const NavBar = () => {

    return (
        <nav className={styles.nav}>
            <NavDropdown />
            <Logo />
            <NavDropdown />
            {/* <ContactButton /> */}
        </nav>
    )
}

export default NavBar;