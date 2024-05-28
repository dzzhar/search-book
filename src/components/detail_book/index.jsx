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
          <h3>{description}</h3>

          <div className={styles.detail__metadata}>
            <span className={styles.metadata__left}>
              <p>Edition</p>
              <p>Genre</p>
              <p>Pages</p>
              <p>Format</p>
            </span>
            <span className={styles.metadata__right}>
              <p>{edition ? edition : "No Data Information"}</p>
              <p>{genres}</p>
              <p>{num_pages}</p>
              <p>{format}</p>
            </span>
          </div>

          <div className={styles.detail__sponsor}>
            <span className={styles.sponsor__merk}>
              <box-icon type="logo" name="amazon" color="#FF9900"></box-icon>
              <p>
                Get it on
                <br />
                Amazon.com
              </p>
            </span>
            <span className={styles.sponsor__merk}>
              <box-icon name="apple" type="logo" color="white"></box-icon>
              <p>
                Get it on <br />
                Apple Books
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
