import ImagesGallery from '@unp/app/images/components/ImagesGallery';
import { getCollectionById, getPhotosCollection } from '../lib/data/data';

import styles from './page.module.css';
import { Suspense } from 'react';
import CollectionImages from '../components/CollectionImages';
import PageLoader from '@unp/app/components/loaders/PageLoader';

type Props = {
  params: {
    collectionId: string;
  };
};

export default async function PhotoCollectionPage({
  params: { collectionId },
}: Props) {
  const collection = await getCollectionById(collectionId);

  if (!collection) return null;

  return (
    <main className={styles.main}>
      <header className={styles.main_header}>
        <h1>{collection.title}</h1>
        <span>{collection.total_photos} photos</span>
      </header>
      <Suspense fallback={<PageLoader textContent="Loading images..." />}>
        <CollectionImages collectionId={collectionId} />
      </Suspense>
    </main>
  );
}
