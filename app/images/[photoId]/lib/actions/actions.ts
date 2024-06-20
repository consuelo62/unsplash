"use server";

import { Routes } from "@unp/app/lib/utils/routes";
import { unsplashHeaders } from "@unp/app/lib/utils/unsplash";
import { revalidatePath } from "next/cache";

const UNSPLASH_API_URL = process.env.UNPLASH_API;

export async function addAction(collectionId: string, photoId: string) {
    try {
        const requestOptions = {
            method: "POST",
            headers: unsplashHeaders(),
            body: JSON.stringify({ collection_id: collectionId, photo_id: photoId })
        };

        const UNSPLASH_ACCESS_KEY = process.env.UNPLASH_ACCESS_KEY;

        await fetch(`${UNSPLASH_API_URL}/collections/${collectionId}/add?client_id=${UNSPLASH_ACCESS_KEY}`, requestOptions);
    } catch (error) {
        console.error('Ocurrió un error al agregar una foto a una colección. ', error)
    }

    revalidatePath(Routes.images + `/${photoId}`);
}

export async function removeAction(collectionId: string, photoId: string) {
    try {
        const requestOptions = {
            method: "POST",
            headers: unsplashHeaders(),
            body: JSON.stringify({ collection_id: collectionId, photo_id: photoId })
        };

        const UNSPLASH_ACCESS_KEY = process.env.UNPLASH_ACCESS_KEY;

        await fetch(`${UNSPLASH_API_URL}/collections/${collectionId}/remove?client_id=${UNSPLASH_ACCESS_KEY}`, requestOptions);
    } catch (error) {
        console.error('Ocurrió un error al agregar una foto a una colección. ', error)
    }

    revalidatePath(Routes.images + `/${photoId}`);
}

