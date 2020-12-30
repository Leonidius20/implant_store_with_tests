import {getFeaturedProducts} from '../dao/products';
import {getPromos} from '../dao/promos';
import BaseController from "../base/baseController";
import MainView from "./mainView";

export default class MainController extends BaseController {

    constructor() {
        super();
        this.view = new MainView(this);
    }

    supplyData() {
        const promosPromise = getPromos();
        const featuredPromise = getFeaturedProducts();

        return Promise.all([promosPromise, featuredPromise]).then(values => {
            this.promos = values[0];
            this.featuredItems = values[1];
            this.view.render();
        });
    }

}