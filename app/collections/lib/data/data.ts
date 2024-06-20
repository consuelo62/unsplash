import { getPhotoById } from "@unp/app/images/lib/data/data";
import Unsplash from "@unp/app/lib/utils/unsplash";

export async function getCollections() {
    try {
        const collections = await Unsplash.collections.list({});

        return collections.response?.results;
    } catch (error) {
        return null;
    }
}

export async function getCollectionById(collectionId: string) {
    try {
        const collection = await Unsplash.collections.get({ collectionId });

        return collection.response;
    } catch (error) {
        return null;
    }
}

export async function searchCollections(query: string, photoId: string) {
    try {
        const photo = await getPhotoById(photoId);

        const photoCollections = photo?.related_collections.results;

        // Hay que filtrar las colecciones para que no salgan las que pertenecen a la foto
        const collectionsResult = await Unsplash.search.getCollections({
            query
        });

        const collections = collectionsResult.response?.results;

        if (collections?.length && photoCollections?.length) {
            const result = collections.filter(
                (collect) => !photoCollections.find((collectPhoto) => collectPhoto.id == collect.id));
            return result;
        }

        return collections;
    } catch (error) {
        return null;
    }
}

export async function getPhotosCollection(collectionId: string) {
    try {
        const photos = await Unsplash.collections.getPhotos({ collectionId });

        return photos.response?.results
    } catch (error) {
        return null;
    }
}