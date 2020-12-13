/* eslint-env jest */

import populateTemplate from "../src/templater";

describe('Templater', () => {
    it('should populate templates', () => {
        const template = "<div><h1>Id: ${id}</h1><h2>Id again: ${id}</h2><h5>Name: ${lastName}</h5></div>";

        const params = {
            id: 4,
            lastName: 'Zero',
        }

        const result = populateTemplate(template, params);

        const expectedResult = "<div><h1>Id: 4</h1><h2>Id again: 4</h2><h5>Name: Zero</h5></div>";

        expect(result).toBe(expectedResult);
    });
});