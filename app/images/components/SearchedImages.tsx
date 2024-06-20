import { searchPhotos } from '../lib/data/data';
import ImagesGallery from './ImagesGallery';

type Props = {
  query: string;
};

export default async function SearchedImages({ query }: Props) {
  const photos = await searchPhotos(query);

  if (!photos || photos.length <= 0) return null;

  return <ImagesGallery photos={photos} style={{ marginTop: '3rem' }} />;
}
