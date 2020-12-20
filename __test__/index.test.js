/* eslint-env jest */

import * as stuff from '../src/index';

describe('Router', () => {

    it('should navigate to correct pages', () => {
        jest.spyOn(stuff, 'showMainPage').mockImplementation(() => {
            console.log('called mocked ');
        });

        window.location.hash = '';
        
        stuff.navigate();

        expect(stuff.showMainPage).toHaveBeenCalled();
    });

});