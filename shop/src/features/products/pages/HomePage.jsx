import products from "../data/products";
import ProductCard from "../../../components/specific/ProductCard";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
