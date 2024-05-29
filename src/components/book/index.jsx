/* eslint-disable react/prop-types */
import "boxicons";
import styles from "./styles.module.css";

const Book = (props) => {
  const { image, title, author } = props;

  return (
    <div className={styles.book}>
      <img src={image} alt={title} />
      <div className={styles.book__like}>
        <span>
          <h3>{title}</h3>
          <p>{author}</p>
        </span>
      </div>
    </div>
  );
};

export default Book;
