import {getCategoriesAndProducts} from "../../src/catalog/catalogModel";
import 'regenerator-runtime/runtime';

jest.mock('../../src/dao/categories', () => {
    return {
        getCategories: () => Promise.resolve([
            {id: 1, name: 'cat1'}, {id: 2, name: 'cat2'}
        ])
    }
});

jest.mock('../../src/dao/products', () => {
    return {
        getProducts: () => Promise.resolve([
            {id: 1, name: 'product1', category: 1},
            {id: 2, name: 'product2', category: 2},
            {id: 3, name: 'product3', category: 2},
        ])
    }
});

describe('CatalogModel', () => {
    it('should combine products with categories', async () => {
        const result = await getCategoriesAndProducts();

        expect(result).toEqual([
            {
                id: 1,
                name: 'cat1',
                products: [{id: 1, name: 'product1', category: 1}]
            },
            {
                id: 2,
                name: 'cat2',
                products: [
                    {id: 2, name: 'product2', category: 2},
                    {id: 3, name: 'product3', category: 2}
                ]
            }
        ]);
    });
})