import template from './errorPageTemplate.html';
import populateTemplate from '../templater';

export default function render(text) {
    document.getElementById('container').innerHTML
        = populateTemplate(template, { text });
}