import styles from './NavDropdown.module.scss';

const NavDropdown = ({ className, variant, text }) => {

    return (
        <div className={`${className} ${styles.dropdown} ${variant ? styles[variant] : ''}`}>
            <span className={styles['dropdown__text']}>{text}</span>
            <div>
                <ul style={{ display: 'none' }}>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                </ul>
            </div>
        </div>
    )
}

export default NavDropdown;