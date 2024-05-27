import { useEffect, useState } from "react";
import API_URL from "../../utils/api/books";
import Book from "../book";
import styles from "./styles.module.css";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div className={styles.books}>
      <h1>Featured Books</h1>
      <div className={styles.book__section}>
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              title={book.title}
              author={book.authors}
              image={book.image_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Books;
