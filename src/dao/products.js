import {fetchFromEndpoint} from "./base";

export function getProducts() {
    return fetchFromEndpoint('products');
}

export function getFeaturedProducts() {
    return getProducts().then(products => {
        return products.filter(product => product['recommended']);
    });
}

export function getProduct(id) {
    return getProducts().then(products => {
        const result = products.find(product => product['id'] === id);
        if (result) return result;
        else throw new Error('no product with such ID');
    });
}

export function getProductsOfCategory(categoryId) {
    return getProducts().then(products => {
        return products.filter(product => product['category'] === categoryId);
    });
}