import {getCategories} from "../dao/categories";

export async function getCategoryName(categoryId) {
    return getCategories().then(categories => {
        const category =
            categories.find(category => category['id'].toString() === categoryId.toString());
        if (category) return category['name'];
        else throw new Error('There is no category with such an ID');
    });
}