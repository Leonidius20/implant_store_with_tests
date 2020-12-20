import BaseController from "../base/baseController";
import {getItemsInCart} from "../dao/cart";
import {getProduct} from "../dao/products";

export default class BaseCartListController extends BaseController {

    async supplyData() {
        let total = 0;
        const products = [];
        const itemsInCart = getItemsInCart();
        for (const productIdString in itemsInCart) {
            const productId = parseInt(productIdString);
            const amount = itemsInCart[productId];
            const product = await getProduct(productId);
            const price = parseInt(product['price'].substring(0, product['price'].length - 1));
            const cost = price * amount;
            total += cost;
            const name = product['name'];
            products.push({ name, amount, cost, productId });
        }
        this.view.render({ total, products });
    }

}