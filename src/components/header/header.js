import { forwardRef, useState } from 'react';
import styles from '../../styles/header.module.css';
import Magnetic from '../magnetic';

const Header = forwardRef(function Index(props, ref) {
  const {menuIsActive, setMenuIsActive} = props;
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
    setMenuIsActive(!menuIsActive);
  }

  // FAIRE POUR QUE LE MENU FONCTIONNE

  console.log(menuIsActive);
  return (
    <div onClick={handleClick} className={styles.header}>
        <Magnetic>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
            <div ref={ref} className={styles.bounds}></div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Header