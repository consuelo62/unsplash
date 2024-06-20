import { Suspense } from 'react';
import CollectionsGallery from './components/CollectionsGallery';
import { getCollections } from './lib/data/data';

import styles from './page.module.css';
import PageLoader from '../components/loaders/PageLoader';

export default async function CollectionsPage() {
  const collections = await getCollections();

  if (!collections) return null;

  return (
    <main className={styles.main}>
      <header className={styles.main_header}>
        <h1>Collections</h1>
        <p>
          Explore the world through collections of beautiful photos free to use
          under the <strong>Unsplash License.</strong>
        </p>
      </header>
      <section>
        <Suspense
          fallback={<PageLoader textContent="Loading collections..." />}
        >
          <CollectionsGallery />
        </Suspense>
      </section>
    </main>
  );
}
