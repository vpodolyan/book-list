import expect from 'expect';
import Immutable from 'immutable';
import { setAddBookBtnActive } from '../../src/actions';
import addBookButtonReducer from '../../src/reducers/addBookButton';


describe('addBookButton reducer tests', () => {
        it('should change button active state', () => {
            const beforeState = { isActive: false };
            const afterState = { isActive: true };
            expect(addBookButtonReducer(beforeState, setAddBookBtnActive(true))).toEqual(afterState);
        })
})
