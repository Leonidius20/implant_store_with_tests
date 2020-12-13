import {API_URL} from "../index";

export default async function getPromo(id) {
    return fetch(API_URL + 'promos')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        }).then(promos => {
            for (const promo of promos) {
                if (promo['id'] === id) return promo;
            }
            throw new Error('there is no promo with such ID');
        });
}