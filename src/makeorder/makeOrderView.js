import pageTemplate from './templates/makeOrderTemplate.html';
import itemTemplate from './templates/orderItemTemplate.html';
import populateTemplate from "../templater";
import {API_URL} from "../index";
import {submitOrder} from "./makeOrderController";

export default function render({ total, products }) {
    let cartItems = '';
    for (const product of products) {
        cartItems += populateTemplate(itemTemplate, product);
    }

    document.getElementById('container').innerHTML
        = populateTemplate(pageTemplate, { total, cartItems, api: API_URL });

    globalThis.onOrderFormSubmit = onOrderFormSubmit;
}

function onOrderFormSubmit(event) {
    const form = document.getElementById('form');

    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        return false;
    }

    form.classList.add('was-validated');

    const name = document.getElementById('inputName4').value;
    const lastName = document.getElementById('inputLastname4').value;
    const email = document.getElementById('inputEmail4').value;
    const phoneNumber = document.getElementById('inputPhone4').value;
    const address = document.getElementById('inputAddress').value;
    const address2 = document.getElementById('inputAddress2').value;
    const city = document.getElementById('inputCity').value;
    const paymentMethod = document.getElementById('inputPaymentOption').value;
    const date = document.getElementById('inputDate').value;

    submitOrder({
        name, lastName, email, phoneNumber, address, address2, city, paymentMethod, date
    });

    return true;
}
