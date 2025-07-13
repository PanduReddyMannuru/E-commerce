import { useParams } from "react-router-dom";
import products from "../data/products"; // Ensure correct relative path

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p style={{ fontSize: "18px", marginTop: "12px" }}>
        Price: ₹{product.price}
      </p>
      <p>Description of the product goes here…</p>
    </div>
  );
}
