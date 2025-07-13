import React from "react";

const Footer = () => (
    <footer style={{ background: "#222", color: "#fff", padding: "2rem 0", marginTop: "2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <div>
                <h3 style={{ marginBottom: "1rem" }}>ShopEase</h3>
                <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
            </div>
            <div>
                <h4>Customer Service</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li><a href="/contact" style={{ color: "#fff" }}>Contact Us</a></li>
                    <li><a href="/faq" style={{ color: "#fff" }}>FAQ</a></li>
                    <li><a href="/returns" style={{ color: "#fff" }}>Returns</a></li>
                </ul>
            </div>
            <div>
                <h4>Follow Us</h4>
                <a href="https://facebook.com" style={{ color: "#fff", marginRight: "1rem" }}>Facebook</a>
                <a href="https://instagram.com" style={{ color: "#fff", marginRight: "1rem" }}>Instagram</a>
                <a href="https://twitter.com" style={{ color: "#fff" }}>Twitter</a>
            </div>
        </div>
    </footer>
);

export default Footer;