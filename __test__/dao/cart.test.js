import {clearCart, getCartSize, isInCart, putToCart, removeFromCart} from "../../src/dao/cart";
import {putToLocalStorage} from "../../src/dao/base";

jest.mock('../../src/dao/base', () => {
    return {
        getFromLocalStorage: () => {
            return {
                1: 1,
                4: 2,
            }
        },
        putToLocalStorage: jest.fn()
    };
});

describe('CartDao', () => {
    it('should compute cart size', () => {
        expect(getCartSize()).toEqual(2);
    });

    it('should add things to cart', () => {
       putToCart(5, 1);
       expect(putToLocalStorage).toHaveBeenCalledWith('cart', {
           1: 1,
           4: 2,
           5: 1
       })
    });

    it('should remove things from cart', () => {
        removeFromCart(1);
        expect(putToLocalStorage).toHaveBeenCalledWith('cart', {
            4: 2
        });
    });

    it('should check if an item is in the cart', () => {
        expect(isInCart(1)).toEqual(true);
        expect(isInCart(2)).toEqual(false);
    });

    it('should clear cart', () => {
        clearCart();
        expect(putToLocalStorage).toHaveBeenCalledWith('cart', '{}');
    });
});