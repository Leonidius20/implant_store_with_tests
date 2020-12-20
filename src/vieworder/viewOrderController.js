import render from './viewOrderView';
import {setIgnoreHashChange} from '../index';
import {getProduct} from '../dao/products';
import BaseController from "../base/baseController";

export default class ViewOrderController extends BaseController {

    constructor(orderObject) {
        super();
        this.orderObject = orderObject;
    }

    supplyData() {
        return this.loadProductNames(this.orderObject)
            .then(items => {
                render({ order: this.orderObject, items });
            }).then(() => {
                setIgnoreHashChange(true);
                new Promise((resolve => {
                    setTimeout(() => {
                        window.location.hash = 'order/' + this.orderObject['id'];
                        resolve();
                    }, 0);
                })).then(() => {
                    setTimeout(() => {
                        setIgnoreHashChange(false);
                    }, 500);
                });
            });
    }

    async loadProductNames(order) {
        const items = {};
        for (const itemId in order['products']) {
            const product = await getProduct(parseInt(itemId));
            items[product['name']] = order['products'][itemId];
        }
        return items;
    }

}