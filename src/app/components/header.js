import React from 'react';
import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import Nav from './navbar';

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/Suvidhalogo" alt="logo" width={150} height={50} /> {/* Use Image component */}
        </Link>
      </div>
<Nav/>
    </header>
  );
};

export default Header;
