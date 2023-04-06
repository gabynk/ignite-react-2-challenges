import logoToDo from '../assets/logo-to-do.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoToDo} alt="logo" />
    </header>
  )
}