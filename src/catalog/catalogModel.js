import {API_URL} from "../index";

export async function getCategoriesAndProducts() {
    const categoriesPromise = fetch(API_URL + 'categories')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        });

    const productsPromise = fetch(API_URL + 'products')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        });


    return Promise.all([categoriesPromise, productsPromise])
        .then(results => {
            const categories = results[0];
            const products = results[1];
            const params = [];
            for (const category of categories) {
                category['products'] = [];
                for (const product of products) {
                    if (product['category'] === category['id']) {
                        category['products'].push(product);
                    }
                }
                params.push(category);
            }
            return params;
    });
}