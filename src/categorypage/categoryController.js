import render from './categoryView';
import ErrorController from '../errorpage/errorController';
import {hideLoader} from '../loader/loader';
import getProducts, {getCategoryName} from './categoryModel';

export default function showPage(categoryId) {
    const namePromise = getCategoryName(categoryId);
    const productsPromise = getProducts(categoryId);

    Promise.all([namePromise, productsPromise]).then(values => {
        render({
            categoryName: values[0],
            products: values[1],
        });
    }).catch(error => {
        new ErrorController().showPage(error);
    }).finally(hideLoader);
}