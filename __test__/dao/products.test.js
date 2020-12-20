import * as productsDao from "../../src/dao/products";
import 'regenerator-runtime/runtime';

jest.mock('../../src/dao/base', () => {
    return {
        fetchFromEndpoint: () => Promise.resolve([
            { id: 3, recommended: true, category: 1 },
            { id: 5, recommended: false, category: 2 },
            { id: 7, recommended: true, category: 1 },
        ])
    };
})

describe('ProductDao', () => {

    it('should find products with specified id', async () => {
        const productId3 = await productsDao.getProduct(3);

        expect(productId3).toEqual({ id: 3, recommended: true, category: 1 });

    });

    it('should throw error when product with specified id is not found', async () => {
        const mockFunction = jest.fn();

        try {
            await productsDao.getProduct(8);
            mockFunction();
        } catch (e) {
            expect(e).not.toBeNull();
        }

        expect(mockFunction).not.toHaveBeenCalled();
    });

    it('should get featured products', async () => {
        const featured = await productsDao.getFeaturedProducts();

        expect(featured).toEqual([
            { id: 3, recommended: true, category: 1 },
            { id: 7, recommended: true, category: 1 },
        ]);
    });

    it('should get products of a set category', async () => {
        const products = await productsDao.getProductsOfCategory(1);

        expect(products).toEqual([
            { id: 3, recommended: true, category: 1 },
            { id: 7, recommended: true, category: 1 },
        ]);
    });

});