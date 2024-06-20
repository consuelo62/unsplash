import Link from 'next/link';
import { getCollections } from '../lib/data/data';
import { Basic } from 'unsplash-js/dist/methods/collections/types';
import { Routes } from '@unp/app/lib/utils/routes';
import Image from 'next/image';

import './styles/collectionsGallery.css';

export default async function CollectionsGallery() {
  const collections = (await getCollections()) as Basic[];

  if (!collections || collections.length <= 0) return null;

  return (
    <div className="collections_gallery">
      {collections.map((collect) => (
        <Link
          key={collect.id}
          className="collections_gallery__collection"
          href={`${Routes.collections}/${collect.id}`}
        >
          <Image
            className="collections_gallery__image"
            src={collect.cover_photo?.urls.regular || ''}
            alt="Collection cover image"
            width={collect.cover_photo?.width}
            height={collect.cover_photo?.height}
          />
          <div className="gallery_collection__data">
            <span className="collection_data__title">{collect.title}</span>
            <span className="collection_data__count">
              {collect.total_photos} photos
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
