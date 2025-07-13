import React from 'react';
import logoImage from '../../assets/logo.jpg';


const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img src={logoImage} alt="ShopEase Logo" style={styles.logoImage} />
                <span style={styles.logoText}>ShopEase</span>
            </div>
            <nav style={styles.nav}>
                <a href="/" style={styles.link}>Home</a>
                <a href="/cart" style={styles.link}>Cart</a>
                <a href="/orders" style={styles.link}>Orders</a>
                <a href="/profile" style={styles.link}>Account</a>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
        background: '#fff',
        borderBottom: '1px solid #eee',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    logoImage: {
        height: '40px',
        width: 'auto',
        borderRadius: '4px',
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#333',
    },
    nav: {
        display: 'flex',
        gap: '24px',
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        fontWeight: '500',
    },
};

export default Header;
