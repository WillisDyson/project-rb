import styles from "./DropdownArrow.module.scss";

const DropdownArrow = ({ className, variant }) => {
  return (
    <svg className={`${styles["dropdown-arrow"]} ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.767 7.748">
        <path className={`${styles["dropdown-arrow__path"]}`} d="M6.285,16.226.6,10.544a.7.7,0,0,1,0-.992l.663-.663a.7.7,0,0,1,.991,0l4.524,4.5,4.524-4.5a.7.7,0,0,1,.991,0l.663.663a.7.7,0,0,1,0,.992L7.278,16.226A.7.7,0,0,1,6.285,16.226Z" />
    </svg>
  );
};

export default DropdownArrow;
