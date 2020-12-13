import render from './viewOrderView';
import {setIgnoreHashChange} from '../index';
import getProduct from '../productpage/productModel';
import {hideLoader, showLoader} from '../loader/loader';
import ErrorController from '../errorpage/errorController';

export default async function showPage(order) {
    return loadProductNames(order)
        .then(items => {
            render({ order, items });
        }).then(() => {
            setIgnoreHashChange(true);
            new Promise((resolve => {
                setTimeout(() => {
                    window.location.hash = 'order/' + order['id'];
                    resolve();
                }, 0);
            })).then(() => {
                setTimeout(() => {
                    setIgnoreHashChange(false);
                }, 500);

            });
        });
}

async function loadProductNames(order) {
    const items = {};
    for (const itemId in order['products']) {
        const product = await getProduct(parseInt(itemId));
        items[product['name']] = order['products'][itemId];
    }
    return items;
}