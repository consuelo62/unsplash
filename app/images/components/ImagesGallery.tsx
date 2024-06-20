import { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Basic } from 'unsplash-js/dist/methods/photos/types';

import './styles/imagesGallery.css';

type Props = {
  style?: CSSProperties;
  photos: Basic[];
};

export default function ImagesGallery({ style, photos }: Props) {
  return (
    <div className="images_gallery" style={style}>
      {photos.map((img, index) => (
        <Link
          key={index}
          href={`/images/${img.id}`}
          role="figure"
          style={
            {
              '--width': img.width,
              '--height': img.height,
            } as React.CSSProperties
          }
        >
          <Image
            className="images_gallery__image"
            src={img.urls.small}
            alt={img.description || 'A unsplash image'}
            width={img.width}
            height={img.height}
          />
        </Link>
      ))}
    </div>
  );
}
