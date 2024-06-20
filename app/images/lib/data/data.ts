import Unsplash from "@unp/app/lib/utils/unsplash";

export async function getPhotos() {
    try {
        const photos = await Unsplash.photos.list({});

        return photos.response?.results;
    } catch (error) {
        return null;
    }
}

export async function getPhotoById(photoId: string) {
    try {
        const photo = await Unsplash.photos.get({ photoId });

        return photo.response;
    } catch (error) {
        return null;
    }
}

export async function searchPhotos(query: string) {
    try {
        const photos = await Unsplash.search.getPhotos({
            query
        });

        return photos.response?.results;
    } catch (error) {
        return null;
    }
}