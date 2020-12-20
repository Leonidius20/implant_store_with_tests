import render from './mainView';
import {getFeaturedProducts} from '../dao/products';
import {getPromos} from '../dao/promos';
import BaseController from "../base/baseController";

export default class MainController extends BaseController {

    supplyData() {
        const promosPromise = getPromos();
        const featuredPromise = getFeaturedProducts();

        return Promise.all([promosPromise, featuredPromise]).then(values => {
            render({
                promos: values[0],
                featuredItems: values[1],
            });
        });
    }

}