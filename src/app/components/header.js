import React from 'react';
import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link';
import Nav from './navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/internzylogo" alt="logo" width={150} height={50} />
        </Link>
      </div>
<Nav/>
    </header>
  );
};

export default Header;
