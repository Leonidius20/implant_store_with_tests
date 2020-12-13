import { API_URL } from "../index";

export async function getPromos() {
    return fetch(API_URL + 'promos')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}

export async function getFeaturedItems() {
    return fetch(API_URL + 'products')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        }).then(products => {
            return products.filter(product => product['recommended']);
        });
}