import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import styles from './gallery.module.css';
//
import Image1 from '../images/1.png';
import Image2 from '../images/2.png';
import Image3 from '../images/3.png';
import Image4 from '../images/4.png';
//
import polygon from '../images/polygon.svg';
//
const images = [Image1, Image2, Image3, Image4];

function OfferButton() {
  return (
    <button type="button" className={styles.offerButton}>
      <p className={styles.buttonText}>Получить КП</p>
      <img src={polygon} alt="icon" />
    </button>
  );
}

function Gallery({ scrollState }) {
  const options = {
    align: 'start',
    loop: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const handle = () => {
    if (!emblaApi || !scrollState) return;
    if (scrollState === 'prev') emblaApi.scrollPrev();
    else emblaApi.scrollNext();
  };

  useEffect(
    () => {
      handle();
    },
    [emblaApi, scrollState],
  );

  return (
    <section className={styles.gallery}>
      <img className={styles.mainImage} src={Image1} alt="main pic" />
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {
            images.map((image) => (
              <div key={image} className={styles.emblaSlide}>
                <img className={styles.image} src={image} alt="gallery card" />
              </div>
            ))
          }
        </div>
      </div>
      <article className={styles.offer}>
        <p className={styles.offerText}>
          Понравился проект?
          <br />
          Оставьте заявку на индивидуальный расчет для вас
        </p>
        <OfferButton />
      </article>
    </section>
  );
}
// function Gallery() {
//   return (
//     <ul className={styles.gallery}>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         scrollbar={{ draggable: true }}
//         // modules={[Scrollbar]}
//         className="swiper"
//       >
//         <SwiperSlide><ImageCard image={Image1} /></SwiperSlide>
//         <SwiperSlide><ImageCard image={Image2} /></SwiperSlide>
//         <SwiperSlide><ImageCard image={Image3} /></SwiperSlide>
//
//       </Swiper>
//     </ul>
//   );
// }

export default Gallery;
