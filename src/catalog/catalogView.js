import catalogTemplate from './templates/catalogTemplate.html'
import categoryTemplate from './templates/categoryTemplate.html'
import cardTemplate from './templates/productCardTemplate.html'
import './templates/categoryStyles.css'
import populateTemplate from "../templater"

export default function render(params) {
    let categories = '';

    for (const category of params) {
        let products = '';
        for (const product of category['products']) {
            products += populateTemplate(cardTemplate, product);
        }
        categories += populateTemplate(categoryTemplate, {
            name: category['name'],
            id: category['id'],
            products
        });
    }

    document.getElementById('container').innerHTML
        = populateTemplate(catalogTemplate, { categories });
}