import {API_URL} from '../index';

// todo: remove
export default async function getProduct(id) {
    return fetch(API_URL + 'products')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then(products => {
            for (const product of products) {
                if (product['id'] === id) {
                    return product;
                }
            }
            throw new Error('no product with such ID');
        });
}

