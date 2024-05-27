import "boxicons";
import styles from "./styles.module.css";

const Book = (props) => {
  const { image, title, author } = props;

  return (
    <div className={styles.book}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
