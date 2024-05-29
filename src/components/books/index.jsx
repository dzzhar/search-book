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

  const [search, setSearch] = useState("");

  const searchItem = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className={styles.books}>
      <span className={styles.books__title}>
        <h1>Featured Books</h1>
        <div className={styles.books__search}>
          <box-icon name="search" color="var(--primary-color)"></box-icon>
          <input
            type="text"
            className={styles.search__input}
            placeholder="Search your book"
            onChange={searchItem}
          />
        </div>
      </span>
      <div className={styles.book__section}>
        {books
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .map((book) => {
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
