import React, { useState } from "react";
import logoImage from '../../../assets/logo.jpg';

const initialCartItems = [
  {
    id: 1,
    name: "Blue Sneakers",
    price: 2499,
    quantity: 2,
    image:logoImage,
  },
  {
    id: 2,
    name: "Red T-shirt",
    price: 799,
    quantity: 1,
    image:logoImage,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, qty) => {
    if (qty < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cartItems.map(({ id, name, price, quantity, image }) => (
              <li key={id} style={styles.item}>
                <img src={image} alt={name} style={styles.image} />
                <div style={styles.details}>
                  <h3>{name}</h3>
                  <p>Price: ₹{price}</p>
                  <label>
                    Qty:{" "}
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(id, parseInt(e.target.value, 10))
                      }
                      style={styles.qtyInput}
                    />
                  </label>
                  <button
                    onClick={() => handleRemove(id)}
                    style={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ₹{totalPrice}</h2>
          <button style={styles.checkoutBtn}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "12px",
  },
  image: {
    width: "120px",
    borderRadius: "6px",
  },
  details: {
    flex: 1,
  },
  qtyInput: {
    width: "50px",
    marginLeft: "8px",
  },
  removeBtn: {
    marginTop: "8px",
    padding: "6px 12px",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  checkoutBtn: {
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
