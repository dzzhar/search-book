import "boxicons";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footer}>
          <h3 className={styles.footer__author}>Develop by Zharifah</h3>
          <div className={styles.footer__icon}>
            <a target="_blank" href="https://github.com/dzzhar">
              <box-icon
                type="logo"
                name="github"
                color="var(--primary-color)"
                size="sm"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/zharifahdzikra"
            >
              <box-icon
                type="logo"
                name="linkedin"
                color="var(--primary-color)"
                size="sm"
              />
            </a>
            <a target="_blank" href="https://instagram.com/zharifahdzikra">
              <box-icon
                type="logo"
                name="instagram-alt"
                color="var(--primary-color)"
                size="sm"
              />
            </a>
            <a target="_blank" href="https://medium.com/@zharifahdzikra">
              <box-icon
                type="logo"
                name="medium-square"
                color="var(--primary-color)"
                size="sm"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
