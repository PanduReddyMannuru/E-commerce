import React from "react";

const dummyOrders = [
  {
    id: "ORD12345",
    date: "2023-06-10",
    total: 4597,
    status: "Delivered",
  },
  {
    id: "ORD12346",
    date: "2023-06-15",
    total: 799,
    status: "Processing",
  },
];

export default function OrdersPage() {
  return (
    <div style={styles.container}>
      <h1>My Orders</h1>
      {dummyOrders.length === 0 ? (
        <p>You have no past orders.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total (₹)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map(({ id, date, total, status }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{date}</td>
                <td>{total}</td>
                <td>{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "12px",
    textAlign: "left",
  },
  td: {
    borderBottom: "1px solid #eee",
    padding: "12px",
  },
};
