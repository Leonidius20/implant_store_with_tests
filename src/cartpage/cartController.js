import getItemsInCart from "./cartModel";
import getProduct from "../productpage/productModel";
import render from "./cartView";
import ErrorController from "../errorpage/errorController";
import {hideLoader} from "../loader/loader";

export default function showPage() {
    loadAndRender()
        .catch(error => {
            new ErrorController().showPage(error);
        }).finally(hideLoader);
}

export async function loadAndRender() {
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
    render({ total, products });
}