import {fetchFromEndpoint} from "./base";

export function getPromos() {
    return fetchFromEndpoint('promos');
}

export function getPromo(id) {
    return getPromos().then(promos => {
        const result = promos.find(promo => promo['id'] === id);
        if (result) return result;
        else throw new Error('There is no promo with such an ID');
    });
}