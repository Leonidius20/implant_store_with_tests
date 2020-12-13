import template from './promoTemplate.html';
import populateTemplate from '../templater';

export default function render(promo) {
    const params = {};
    Object.assign(params, promo); // copying so that 'promo' is not modified

    if (params['description'] == null) {
        params['description'] = '';
    }

    document.getElementById('container').innerHTML =
        populateTemplate(template, params);
}