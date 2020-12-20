import CategoryController from "../../src/categorypage/categoryController";
import render from "../../src/categorypage/categoryView";
import 'regenerator-runtime/runtime';

jest.mock('../../src/categorypage/categoryModel', () => {
    return {
        getCategoryName: () => {
            return Promise.resolve('Cat1');
        }
    }
});

jest.mock('../../src/dao/products', () => {
    return {
        getProductsOfCategory: () => Promise.resolve([
            {id: 1, name: 'product1', category: 1},
            {id: 2, name: 'product2', category: 1},
            {id: 3, name: 'product3', category: 1},
        ])
    }
});

jest.mock('../../src/categorypage/categoryView');

describe('CategoryController', () => {
    it('should supply data to view', async () => {
        await new CategoryController(1).supplyData();

        expect(render).toHaveBeenCalledWith({
            categoryName: 'Cat1',
            products: [
                {id: 1, name: 'product1', category: 1},
                {id: 2, name: 'product2', category: 1},
                {id: 3, name: 'product3', category: 1},
            ]
        })
    });
});