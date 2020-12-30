import BaseController from "../base/baseController";
import {getItemsInCart} from "../dao/cart";
import {getProduct} from "../dao/products";
import 'regenerator-runtime/runtime';

export default class BaseCartListController extends BaseController {

    async supplyData() {
        this.total = 0;
        this.products = [];
        const itemsInCart = getItemsInCart();
        for (const productId in itemsInCart) {
            const amount = itemsInCart[productId];
            const product = await getProduct(productId);
            const price = parseInt(product['price'].substring(0, product['price'].length - 1));
            const cost = price * amount;
            this.total += cost;
            const name = product['name'];
            this.products.push({ name, amount, cost, productId });
        }
        this.view.render({ total: this.total, products: this.products });
    }

}