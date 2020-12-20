import render from './categoryView';
import {getCategoryName} from './categoryModel';
import BaseController from "../base/baseController";
import {getProducts} from "../dao/products";

export default class CategoryController extends BaseController {

    constructor(categoryId) {
        super();
        this.categoryId = categoryId;
    }

    supplyData() {
        const namePromise = getCategoryName(this.categoryId);
        const productsPromise = getProducts(this.categoryId);

        return Promise.all([namePromise, productsPromise]).then(values => {
            render({
                categoryName: values[0],
                products: values[1],
            });
        });
    }

}