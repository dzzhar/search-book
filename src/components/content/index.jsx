import "boxicons";
import styles from "./styles.module.css";

const Content = (props) => {
  const { title, subtitle } = props;
  return (
    <>
      <div className={styles.books}>
        <div className={styles.books__section}>
          <h1>{title}</h1>
          <div className={styles.section__sub}>
            <p>{subtitle}</p>
            <div className={styles.icons}>
              <a href="">
                <box-icon
                  type="logo"
                  name="github"
                  color="var(--primary-color)"
                  size="sm"
                />
              </a>
              <a href="">
                <box-icon
                  type="logo"
                  name="linkedin"
                  color="var(--primary-color)"
                  size="sm"
                />
              </a>
              <a href="">
                <box-icon
                  type="logo"
                  name="instagram-alt"
                  color="var(--primary-color)"
                  size="sm"
                />
              </a>
              <a href="">
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
      </div>
    </>
  );
};

export default Content;
