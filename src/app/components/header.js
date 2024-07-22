import React from 'react';
import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/Suvidhalogo" alt="logo" width={150} height={50} /> {/* Use Image component */}
        </Link>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
