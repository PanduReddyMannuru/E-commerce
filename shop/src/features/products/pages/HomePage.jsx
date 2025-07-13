import products from "../data/products";
import ProductCard from "../../../components/specific/ProductCard";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Our ShopEase</h1>
      <p>Explore our latest products below:</p>
      <p>Check out our latest products below:</p>
      <p>Discover the best deals on our products:</p> 
      <p>Find your favorite items at unbeatable prices:</p>
      <p>Shop now and enjoy exclusive offers!</p>
      <p>Browse through our collection and find what you love!</p>
      <p>Don't miss out on our special discounts!</p>
      <p>Shop with us for the best online shopping experience!</p>

            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
    </div>
  );
}
