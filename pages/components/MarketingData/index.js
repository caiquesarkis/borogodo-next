import styles from "./index.module.css";

export default function MarketingData() {
  return (
    <section id={styles.marketingData}>
      <h2 id={styles.marketingDataTitle}>Por que usar o marketing de influência?</h2>
      
      <div id={styles.marketingDataWrapper}>
        <div>
          <p className={styles.marketingDataPercentages} id={styles.firstPercentage}>76%</p>
          <p className={styles.marketingDataText}>dos usuários já compraram algo por meio de indicação de influenciadores</p>
        </div>
        <div>
          <p className={styles.marketingDataPercentages} id={styles.secondPercentage}>50%</p>
          <p className={styles.marketingDataText}>costuma pesquisar a opinião de influenciadores digitais antes de comprar produtos e serviços</p>
        </div>
        <div>
          <p className={styles.marketingDataPercentages} id={styles.thirdPercentage}>55%</p>
          <p className={styles.marketingDataText}>acham que recomendações feitas por influencers são menos invasivas do que os anúncios na internet e TV</p>
        </div>
      </div>

      <p className={styles.marketingDataText} id={styles.studySource}>Estudo realizado pelo Instituto Qualibest</p>
    </section>
  )
}
