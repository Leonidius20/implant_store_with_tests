import template from './viewOrderTemplate.html';
import populateTemplate from "../templater";

export default function render({ order, items }) {
    let itemsString = '';
    for (const itemName in items) {
        itemsString += `${itemName} (${items[itemName]}), `;
    }
    itemsString = itemsString.substring(0, itemsString.length - 2);

    document.getElementById('container').innerHTML
        = populateTemplate(template, Object.assign(order, { items: itemsString }));
}