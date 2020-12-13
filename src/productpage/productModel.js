import {API_URL} from '../index';

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

export function putToCart(productId, amount) {
    const cart = JSON.parse(window.localStorage.getItem('cart')) || {};
    cart[productId] = amount;
    window.localStorage.setItem('cart', JSON.stringify(cart));

    return Object.keys(cart).length;
}

export function isInCart(productId) {
    const cart = JSON.parse(window.localStorage.getItem('cart')) || {};
    return cart[productId] != null;
}