import MakeOrderController from "../../src/makeorder/makeOrderController";
import {clearCart} from "../../src/dao/cart";
import {updateCartSize} from "../../src";
import 'regenerator-runtime/runtime';

jest.mock('../../src/dao/orders', () => {
    return {
        postOrder: () => {
            return Promise.resolve({ id: 1});
        }
    };
});

jest.mock('../../src/vieworder/viewOrderController', () => {
   return () => {
       return {
           showPage: () => {}
       };
   };
});

jest.mock('../../src/dao/cart');
jest.mock('../../src/index');

describe('MakeOrderController', () => {
   it('should clear cart after checkout', done => {

       new MakeOrderController().submitOrder({});

       setTimeout(() => {
           expect(clearCart).toHaveBeenCalled();
           expect(updateCartSize).toHaveBeenCalled();
           done();
       }, 90);
   });
});