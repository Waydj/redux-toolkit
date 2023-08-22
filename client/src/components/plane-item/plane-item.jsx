import { Link } from "react-router-dom";
import styles from "./plane-item.module.css";
import { paths } from "../../paths";

export const PlaneItem = ({ plane }) => {
  return (
    <Link to={`${paths.plane}/${plane._id}`} className={styles.plane}>
      <div className={styles.capacity}>{plane.capacity}</div>
      {plane.planeImage && (
        <img className={styles.image} src={plane.planeImage} />
      )}
      <div className={styles.info}>
        <h2 className={styles.title}>{plane.name}</h2>
        <span className={styles.price}>{plane.price}</span>
      </div>
    </Link>
  );
};
