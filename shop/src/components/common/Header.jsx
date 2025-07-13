import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>ShopLogo</div>
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
    logo: {
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