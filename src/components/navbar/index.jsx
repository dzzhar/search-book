import styles from "./styles.module.css";
import brand from "../../assets/img/brand.png";
import icon from "../../assets/icons/menu.svg";
import List from "../navbar_list";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={styles.navbar}>
        <span className={styles.navbar__mobile}>
          <img className={styles.navbar__brand} src={brand} alt="brand" />
          <img
            className={styles.navbar__toggle}
            src={icon}
            alt="toggle"
            onClick={handleToggle}
          />
        </span>
        <div
          className={`${styles.navbar__list} ${
            isOpen ? styles.list__open : ""
          }`}
        >
          <List list="home" to="/" />
          <List list="about" to="/pages/about" />
          <List list="books" to="/pages/books" />
          <List list="top 100" to="/pages/top" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
