import styles from  "./index.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleHamburguer = () => {
    setIsOpen(!isOpen) 
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Image className={styles.navbarLogo} width={114} height={50} src="/logo.png"/>
        <ul className={styles.navbarLinks}>
          <li><a className={styles.navbarLink} href="#whatwedo">O QUE FAZEMOS</a></li>
          <li><a className={styles.navbarLink} href="#costumers">CLIENTES</a></li>
          <li><a className={styles.navbarLink} href="#marketing-data">PORQUÊ</a></li>
          <li><a className={styles.navbarLink} href="#contact-form">CONTATO</a></li>
        </ul>
        
        {isOpen &&
        <div className={styles.navbarLinksMobileWrapper}>
          <ul className={styles.navbarLinksMobile}>
            <li><a className={styles.navbarLink} href="#whatwedo">O QUE FAZEMOS</a></li>
            <li><a className={styles.navbarLink} href="#costumers">CLIENTES</a></li>
            <li><a className={styles.navbarLink} href="#marketing-data">PORQUÊ</a></li>
            <li><a className={styles.navbarLink} href="#contact-form">CONTATO</a></li>
          </ul>
        </div>
       }
        {!isOpen &&
          <button onClick={handleHamburguer} className={styles.navbarHamburguer}>
            <Image width={25} height={21} src="/hamburguer-icon.png"/>
          </button>
        }
      </div>
       </nav>
  );
}
