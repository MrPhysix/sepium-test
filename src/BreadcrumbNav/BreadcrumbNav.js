import React from 'react';
import styles from './breadcrumb-nav.module.css';

function BreadcrumbNav() {
  // mock
  const pagesName = ['Главная', 'Портфолио', 'Кафе-Пекарня “ПОД КЛЮЧ”'];

  return (
    <nav className={styles.nav}>
      {
      pagesName.map((item, i) => (
        <>
          {
            i < pagesName.length - 1
              ? (
                <a
                  className={styles.link}
                  href="/#"
                >
                  {item}
                </a>
              )
              : <p className={styles.currentPage}>{item}</p>
          }
          {i !== pagesName.length - 1 && <p className={styles.arrow}>&rarr;</p>}
        </>
      ))
    }
    </nav>
  );
}

export default BreadcrumbNav;
