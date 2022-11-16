import styles from "./index.module.css";
import Image from "next/image"

export default function Costumers() {
  return (
    <section id="costumers" className={styles.costumers}>

      <h2 className={styles.costumersTitle}> Nossos Clientes </h2>
        
        <div id={styles.costumersContainer}>
          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Bo.Bô"
              src="/costumers-logos/bo-bo.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Grupo Boticário"
              src="/costumers-logos/grupo-boticario.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Carmen Steffens"
              src="/costumers-logos/carmen-steffens.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Vivo"
              src="/costumers-logos/vivo.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Elle"
              src="/costumers-logos/elle.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Hector Albertazzi"
              src="/costumers-logos/hector-albertazzi.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Iguatemi"
              src="/costumers-logos/iguatemi.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Itaú"
              src="/costumers-logos/itau.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="John John"
              src="/costumers-logos/john-john.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Lez a Lez"
              src="/costumers-logos/lez-a-lez.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Lunender"
              src="/costumers-logos/lunender.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Pátio Batel"
              src="/costumers-logos/patio-batel.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Patricia Bonaldi"
              src="/costumers-logos/patbo.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Renner"
              src="/costumers-logos/renner.png"
            />
          </div>

          <div className={styles.costumersContainerBlock}>
            <Image 
              className={styles.costumersImage}
              width={155}
              height={145}
              alt="Geek Conteúdo"
              src="/costumers-logos/geek-conteudo.png"
            />
          </div>
        </div>

    </section>
  )
}
