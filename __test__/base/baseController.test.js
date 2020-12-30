import BaseController from "../../src/base/baseController";

describe('BaseController', () => {
   it('should show error screen if error happens', () => {
       const controller = new BaseController();
       controller.supplyData = jest.fn(() => {
           return new Promise((resolve, reject) => {
               reject();
           });
       });

       controller.showPage();
   });
});