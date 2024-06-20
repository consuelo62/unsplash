import { getPhotoById } from '../lib/data/data';

import Image from 'next/image';
import OwnerUser from './components/OwnerUser';
import Link from 'next/link';
import DownArrow from './components/icons/DownArrow';
import Plus from './components/icons/Plus';
import CollectionList from '../../collections/components/CollectionList';
import AddToCollections from './components/collections/AddToCollections';
import Remove from './components/icons/Remove';
import { removeAction } from './lib/actions/actions';

import styles from './page.module.css';

type Props = {
  params: {
    photoId: string;
  };
  searchParams: {
    addToCollection?: string;
    collection?: string;
  };
};

export default async function ImagePage({
  params: { photoId },
  searchParams: { addToCollection, collection = '' },
}: Props) {
  const photo = await getPhotoById(photoId);

  if (!photo) return null;

  const publishDate = new Date(photo.created_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <main className={styles.main}>
      <section className={styles.main_image__container}>
        <Image
          className={styles.main_image}
          src={photo.urls.regular}
          alt={photo.description || 'A Unsplash images'}
          width={photo.width}
          height={photo.height}
        />
      </section>
      <section className={styles.main_image__data}>
        <OwnerUser user={photo.user} />
        <div>
          <p className={styles.main_data__published}>
            Published on {publishDate}
          </p>
        </div>
        <div className={styles.main_data__actions}>
          <Link className="btn filled" href={'?addToCollection=true'}>
            <Plus />
            <span>Add to Collection</span>
          </Link>
          <Link
            className="btn filled"
            href={photo.links.download}
            target="_blank"
            download
          >
            <DownArrow />
            <span>Download</span>
          </Link>
        </div>
        <div>
          <CollectionList
            title="Collections"
            collections={photo.related_collections.results}
            action={async (collectId) => {
              'use server';
              await removeAction(collectId, photo.id);
            }}
            actionName="Remove"
            actionIcon={<Remove />}
          />
        </div>
      </section>
      <AddToCollections
        photoId={photo.id}
        queryCollection={collection}
        open={Boolean(addToCollection)}
      />
    </main>
  );
}
