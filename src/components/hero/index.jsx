import styles from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.hero__right}>
            <img
              src="https://picsum.photos/250/350"
              alt="novel pic"
              className={styles.right__pic}
            />
          </div>
          <div className={styles.hero__left}>
            <h3 className={styles.left__title}>
              let's make the best invesment
            </h3>
            <h1 className={styles.left__sub}>
              Read More and Make Success the Result of Perfection.
            </h1>
            <button className={styles.left__button}>explore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
