/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Book from "../book";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://example-data.draftbit.com/books?_limit=20`
      );
      const data = await result.json();
      setBooks(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.books}>
      <h1>Featured Books</h1>
      <div className={styles.book__section}>
        {books.map((book) => {
          return (
            <>
              <Link
                to={`/pages/detail/${book.id}`}
                className={styles.book__link}
              >
                <Book
                  key={book.id}
                  title={book.title}
                  author={book.authors}
                  image={book.image_url}
                />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
