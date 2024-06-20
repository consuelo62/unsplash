import Image from 'next/image';
import SearchImages from './images/components/inputs/SearchImages';

import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.main_images__container}>
        <Image
          className={styles.main_left__image}
          src="/hero-left.png"
          alt="Hero left image"
          width={537}
          height={759}
        />
      </section>
      <section className={styles.main_search}>
        <h1>Search</h1>
        <p>Search high-resolution images from Unsplash</p>
        <SearchImages className={styles.main_search__input} />
      </section>
      <section className={styles.main_images__container}>
        <Image
          className={styles.main_right__image}
          src="/hero-right.png"
          alt="Hero right image"
          width={537}
          height={759}
        />
      </section>
    </main>
  );
}
