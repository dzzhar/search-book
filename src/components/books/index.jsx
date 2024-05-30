import { useEffect, useState } from "react";
import Book from "../book";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://example-data.draftbit.com/books`);
      const data = await result.json();
      setBooks(data);
    };

    fetchData();
  }, []);

  const searchItem = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(books.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredBooks = books.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const currentItems = filteredBooks.slice(startIndex, endIndex);

  const previous = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const next = () => {
    setCurrentPage((prevPage) => prevPage + 1);
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
        {currentItems.map((book) => (
          <Link
            to={`/pages/detail/${book.id}`}
            className={styles.book__link}
            key={book.id}
          >
            <Book
              title={book.title}
              author={book.authors}
              image={book.image_url}
            />
          </Link>
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={previous}>
          <box-icon
            name="chevron-left"
            color="var(--primary-color)"
            size="lg"
          ></box-icon>
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button onClick={next}>
          <box-icon
            name="chevron-right"
            color="var(--primary-color)"
            size="lg"
          ></box-icon>
        </button>
      </div>
    </div>
  );
};

export default Books;
