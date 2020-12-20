import {getCategoryName} from "../../src/categorypage/categoryModel";
import 'regenerator-runtime/runtime';

jest.mock('../../src/dao/categories', () => {
    return {
        getCategories: () => {
            return Promise.resolve([
                {id: 1, name: 'Cat1'}, {id: 2, name: 'Cat2'}
            ]);
        }
    };
});

describe('CategoryModel', () => {
    it('should find a name of a category with set id', async () => {
        const name = await getCategoryName(2);

       expect(name).toEqual('Cat2');
    });

    it('should throw an error if category does not exist', async () => {
        const func = jest.fn();

        await getCategoryName(3).catch(e => {
           func();
        });

        expect(func).toHaveBeenCalled();
    });

})