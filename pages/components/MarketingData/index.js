import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from "./index.module.css";

export default function MarketingData() {

  const swiperRef = useRef();

  return (
    <section id="marketing-data" className={styles.marketingData}>
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

      <div id={styles.carouselWrapper}>
        <button className={styles.swiperButton} id={styles.prev} onClick={() => swiperRef.current?.slidePrev()}></button>
      
        <Swiper 
        modules={[Navigation]}
        id={styles.mySwiper}
        initialSlide="1"
        navigation={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          }
        }>
          <SwiperSlide>
            <p className={styles.marketingDataPercentages} id={styles.firstPercentage}>76%</p>
            <p className={styles.marketingDataText}>dos usuários já compraram algo por meio de indicação de influenciadores</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.marketingDataPercentages} id={styles.secondPercentage}>50%</p>
            <p className={styles.marketingDataText}>costuma pesquisar a opinião de influenciadores digitais antes de comprar produtos e serviços</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.marketingDataPercentages} id={styles.thirdPercentage}>55%</p>
            <p className={styles.marketingDataText}>acham que recomendações feitas por influencers são menos invasivas do que os anúncios na internet e TV</p>
          </SwiperSlide>
        </Swiper>
  
        <button className={styles.swiperButton} id={styles.next} onClick={() => swiperRef.current?.slideNext()}></button>
      </div>

      <p className={styles.marketingDataText} id={styles.studySource}>Estudo realizado pelo Instituto Qualibest</p>
    </section>
  )
}
