import React, { useState } from 'react';
import styles from './main.module.css';
import BreadcrumbNav from '../BreadcrumbNav/BreadcrumbNav';
import SliderButton from '../SliderButton/SliderButton';
import Gallery from '../Gallery/Gallery';

function Main() {
  const mocked = {
    title: 'Кафе-Пекарня «ПОД КЛЮЧ»',
    subtitle: 'Дизайн проект и поставка технологического оборудования для Кафе-Пекарни «ПОД КЛЮЧ»',
  };

  const [scrollState, setScrollState] = useState(null);

  const handleScrollState = (state) => {
    setScrollState(state);
  };

  return (
    <main className={styles.main}>
      <BreadcrumbNav />
      <h1 className={styles.title}>{mocked.title}</h1>
      <section className={styles.section}>
        <p className={styles.subtitle}>{mocked.subtitle}</p>
        <nav className={styles.sliderNav}>
          <SliderButton handleClick={() => handleScrollState('prev')} direction="prev" />
          <SliderButton handleClick={() => handleScrollState('next')} direction="next" />
        </nav>
      </section>
      <Gallery scrollState={scrollState} />
    </main>
  );
}

export default Main;
