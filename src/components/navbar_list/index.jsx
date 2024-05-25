import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const List = (props) => {
  const { to, list } = props;
  return (
    <Link className={styles.list__item} to={to}>
      {list}
    </Link>
  );
};

export default List;
