import template from './categoryTemplate.html';
import cardTemplate from '../catalog/templates/productCardTemplate.html';
import '../catalog/templates/categoryStyles.css';
import populateTemplate from "../templater";

export default function render({ categoryName, products }) {
    let cards = '';

    for (const product of products) {
        cards += populateTemplate(cardTemplate, product);
    }

    document.getElementById('container').innerHTML
        = populateTemplate(template, {
            name: categoryName,
            products: cards,
    });
}