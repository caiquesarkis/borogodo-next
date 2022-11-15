import styles from  "./index.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerWrapper}>

        <Image className={styles.bannerImage} width={1366} height={768} alt="Influenciadora futurista" src="/banner-image.png"/>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Não somos gurus digitais, nem fazemos magia.</h1>
          <h3 className={styles.bannerSubtitle}>
            Mas podemos te ajudar e muito! Nós somos o Borogodó que faltava para
            acelerar o seu negócio no mundo digital!
          </h3>
          <a className={styles.bannerCta} href="#contact-form"><p>MAPEAR INFLUENCIADORES</p></a>
        </div>
        
      </div>
    </section>
  );
}
