/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

const DetailBook = () => {
  const [book, setBooks] = useState({});
  const params = useParams();

  useEffect(() => {
    const getBook = async () => {
      const result = await fetch(
        `https://example-data.draftbit.com/books/${params.id}`
      );
      const data = await result.json();
      // console.log(params.id);
      // console.log(result);
      // console.log(data);

      setBooks(data);
    };

    getBook();
  }, []);

  const {
    title,
    authors,
    description,
    edition,
    format,
    num_pages,
    rating,
    genres,
    image_url,
  } = book;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={styles.detail}>
        <div className={styles.detail__image}>
          <img src={image_url} alt={title} />
        </div>
        <div className={styles.detail__leftside}>
          <h1>{title}</h1>
          <div className={styles.detail__sub}>
            <h2>{authors}</h2>
            <span className={styles.detail__rating}>
              <box-icon name="star" type="solid" color="#ffb800"></box-icon>
              <h2>{rating}</h2>
            </span>
          </div>
          <h3 className={isOpen ? null : `${styles.detail__paragraph}`}>
            {description}
          </h3>
          <span className={styles.detail__action}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.detail__button}
            >
              {isOpen ? `Read Less` : `Read More`}
            </button>
          </span>

          <div className={styles.detail__metadata}>
            <span className={styles.metadata__props}>
              <p className={styles.metadata__name}>Edition</p>
              <p className={styles.metadata__value}>
                {edition ? edition : "No Data Information"}
              </p>
            </span>
            <span className={styles.metadata__props}>
              <p className={styles.metadata__name}>Genre</p>
              <p className={styles.metadata__value}>{genres}</p>
            </span>
            <span className={styles.metadata__props}>
              <p className={styles.metadata__name}>Pages</p>
              <p className={styles.metadata__value}>{num_pages}</p>
            </span>
            <span className={styles.metadata__props}>
              <p className={styles.metadata__name}>Format</p>
              <p className={styles.metadata__value}>{format}</p>
            </span>
          </div>

          <div className={styles.detail__sponsor}>
            <a
              href="https://www.amazon.com/"
              className={styles.sponsor__merk}
              target="_blank"
            >
              <box-icon type="logo" name="amazon" color="#FF9900"></box-icon>
              <p>
                Get it on
                <br />
                Amazon.com
              </p>
            </a>
            <a
              href="https://www.apple.com/apple-books/"
              className={styles.sponsor__merk}
              target="_blank"
            >
              <box-icon name="apple" type="logo" color="white"></box-icon>
              <p>
                Get it on <br />
                Apple Books
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
