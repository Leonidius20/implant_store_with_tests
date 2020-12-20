import ProductController from "../../src/productpage/productController";
import {putToCart} from "../../src/dao/cart";
import {updateCartSize} from "../../src";

jest.mock('../../src/dao/products', () => {
    return {
        getProduct: () => {
            return Promise.resolve({ id: 1, name: 'Prod1' });
        }
    };
});

jest.mock('../../src/dao/cart', () => {
    return {
        isInCart: () => {
            return true;
        },
        putToCart: jest.fn()
    }
});

jest.mock('../../src/index');

jest.mock('../../src/productpage/productView');

describe('ProductController', () => {
    it('should supply data to view', async () => {
        const controller = new ProductController(1);
        await controller.supplyData();
        expect(controller.view.render).toHaveBeenCalledWith({
            id: 1, name: 'Prod1', isInCart: true
        });
    });

    it('should add products to cart and update cart badge', () => {
        new ProductController(1).addToCart(1, 2);
        expect(putToCart).toHaveBeenCalledWith(1, 2);
        expect(updateCartSize).toHaveBeenCalled();
    })
});