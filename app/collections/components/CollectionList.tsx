import Image from 'next/image';
import { Basic } from 'unsplash-js/dist/methods/collections/types';
import Submit from '@unp/app/components/buttons/Submit';

import Link from 'next/link';

import './styles/collectionsList.css';

type Props = {
  title?: string;
  collections: Basic[];
  actionName: string;
  actionIcon: React.ReactNode;
  action: (collectionId: string) => Promise<void>;
};

export default function CollectionList({
  title,
  collections,
  actionName,
  actionIcon,
  action,
}: Props) {
  if (!collections || collections.length <= 0)
    return <div className="image_collections__no-result">No results</div>;

  return (
    <div className="image_collections">
      {title && <h2>{title}</h2>}
      <ul className="image_collections__list">
        {collections.map((collect) => (
          <li key={collect.id} className="image_collections__item">
            <Link
              className="image_collection__data"
              href={`/collections/${collect.id}`}
            >
              <div className="image_collection__cover">
                {collect.cover_photo ? (
                  <Image
                    src={collect.cover_photo.urls.thumb}
                    alt={collect.description || 'Collection cover'}
                    width={70}
                    height={70}
                  />
                ) : (
                  <span>No preview</span>
                )}
              </div>
              <div className="image_collection__texts">
                <span className="image_collection__title">{collect.title}</span>
                <span className="image_collection__count">
                  {collect.total_photos} photos
                </span>
              </div>
            </Link>
            <form
              className="image_collection__action"
              action={async () => {
                'use server';
                await action(collect.id);
              }}
            >
              <Submit>
                {actionIcon}
                <span>{actionName}</span>
              </Submit>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
