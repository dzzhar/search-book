/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const fetchRandomImage = async () => {
      const response = await fetch(
        `https://example-data.draftbit.com/books?_limit=50`
      );
      const data = await response.json();

      if (response.ok && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedImage = data[randomIndex];
        setRandomImage(selectedImage.image_url);
      } else {
        throw new Error("No images found");
      }
    };

    const intervalId = setInterval(fetchRandomImage, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.hero__right}>
        {randomImage && (
          <img
            src={randomImage}
            className={styles.right__pic}
            alt="Random Pic"
          />
        )}
      </div>
      <div className={styles.hero__left}>
        <h3 className={styles.left__title}>let's make the best invesment</h3>
        <h1 className={styles.left__sub}>
          Read More and Make Success the Result of Perfection.
        </h1>
        <Link to="/pages/books">
          <button className={styles.left__button}>explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
