import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`} className={styles.button}>
        View Details
      </Link>
    </div>
  );
}
