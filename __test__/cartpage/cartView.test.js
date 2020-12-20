import CartView from "../../src/cartpage/cartView";

describe('CartView', () => {
    it('should re-render cart after element deletion', () => {
        document.body.innerHTML = '<div id="outer"><div><button id="b"></button></div></div>';

        const button = document.getElementById('b');
        const outer = document.getElementById('outer');

        Object.defineProperty(outer, 'remove', {
            value: jest.fn()
        });

        const cartView = new CartView({
            removeFromCart: jest.fn(),
            total: 0,
            products: []
        });

        Object.defineProperty(cartView, 'render', {
           value: jest.fn()
        });

        cartView.onRemoveItemFromCartClicked(button, 1);

        expect(outer.remove).toHaveBeenCalled();

    })
})