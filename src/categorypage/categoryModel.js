import {getCategories} from "../dao/categories";

export async function getCategoryName(categoryId) {
    return getCategories().then(categories => {
        const category = categories.find(category => category['id'] === categoryId);
        if (category) return category['name'];
        throw new Error('There is no category with such ID');
    });
}