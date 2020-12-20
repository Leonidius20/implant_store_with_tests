import CartController from "../../src/cartpage/cartController";
import CartView from "../../src/cartpage/cartView";
import {updateCartSize} from "../../src/index";
import {removeFromCart} from "../../src/dao/cart";

jest.mock('../../src/cartpage/cartView');

jest.mock('../../src/index');

jest.mock('../../src/dao/cart', () => {
   return {
       getItemsInCart: () => {
           return {
               1: 1,
               2: 1,
           }
       },
       removeFromCart: jest.fn(),
   };
});

jest.mock('../../src/dao/products', () => {
    return {
      getProduct: (id) => {
          return {id, name: 'Generic name', price: `${id * 100}$`};
      }
    };
});

describe('CartController', () => {

    it('should supply data to view', async () => {
        await new CartController().supplyData();

        const renderMock = CartView.mock.instances[0].render;

        expect(renderMock).toHaveBeenCalledWith({
            total: 300,
            products: [
                {
                    name: 'Generic name',
                    amount: 1,
                    cost: 100,
                    productId: 1,
                },
                {
                    name: 'Generic name',
                    amount: 1,
                    cost: 200,
                    productId: 2,
                }
            ]
        });
    });

    it('should remove products from cart', async () => {
        const controller = new CartController();
        await controller.supplyData();

        controller.removeFromCart(1);

        expect(removeFromCart).toHaveBeenCalledWith(1);
        expect(updateCartSize).toHaveBeenCalled();
        expect(controller.total).toEqual(200);
        expect(controller.products).toEqual([
            {
                name: 'Generic name',
                amount: 1,
                cost: 200,
                productId: 2,
            }
        ]);
    });
});