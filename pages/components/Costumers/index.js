import styles from "./index.module.css";
import Image from "next/image"

export default function Costumers() {
  return (
    <section id="costumers" className={styles.costumers}>
      <h2 className={styles.costumersTitle}>Nossos Clientes</h2>
      <picture>
        <source media="(max-width: 699px)" srcSet="/costumers-image-mobile.png"/>
        <Image className={styles.costumersImage} width={770} height={422} alt="Nossos Clientes" src="/costumers-image.png"/>
      </picture>
    </section>
  )
}
