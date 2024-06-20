import ImagesGallery from '@unp/app/images/components/ImagesGallery';
import { getPhotosCollection } from '../lib/data/data';

type Props = {
  collectionId: string;
};

export default async function CollectionImages({ collectionId }: Props) {
  const photos = await getPhotosCollection(collectionId);

  if (!photos) return null;

  return <ImagesGallery photos={photos} style={{ marginTop: '1rem' }} />;
}
