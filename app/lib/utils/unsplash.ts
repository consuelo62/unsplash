import { createApi } from 'unsplash-js';

const Unsplash = createApi({
    accessKey: String(process.env.UNPLASH_ACCESS_KEY)
});

export const unsplashHeaders = () => {
    const CLIENT_ID = process.env.UNPLASH_APP_ID;

    const headers = {
        'Accept-Version': 'v1',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    return headers;
}

export default Unsplash;