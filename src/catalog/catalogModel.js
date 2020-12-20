import {getCategories} from "../dao/categories";
import {getProducts} from "../dao/products";

export async function getCategoriesAndProducts() {
    const categoriesPromise = getCategories();
    const productsPromise = getProducts();

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