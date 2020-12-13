import {API_URL} from "../index";

export default async function getProducts(categoryId) {
    return fetch(API_URL + 'products')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        }).then(products => {
            return products.filter(product => product['category'] === categoryId);
        });
}

export async function getCategoryName(categoryId) {
    return fetch(API_URL + 'categories').then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json()
    }).then(categories => {
        const category = categories.find(category => category['id'] === categoryId);
        if (category == null) throw new Error('There is no category with such ID');
        return category['name'];
    });
}