import React from "react";

export default function ProfilePage() {
  // For now, mock user data — replace with real auth user info later
  const user = {
    name: "Pandu Reddy",
    email: "Reddy@Contact.com",
    joinedDate: "2023-05-01",
  };

  const handleLogout = () => {
    // TODO: Add logout logic (clear tokens, redirect, etc)
    alert("Logout clicked!");
  };

  return (
    <div style={styles.container}>
      <h1>My Profile</h1>
      <div style={styles.infoBox}>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Member since:</strong> {user.joinedDate}
        </p>
      </div>
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  infoBox: {
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  logoutButton: {
    padding: "10px 20px",
    backgroundColor: "#ff4d4f",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
