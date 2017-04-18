import expect from 'expect'
import { addBook, removeBook, editBook, switchEditable } from 'actions'
import booksReducer from 'reducers/books'


describe('books reducer tests', () => {
    const testBook = {id: 1, title: 'Test', author: 'Test Author', editable: false};

    it('should add new book to state', () => {
        const afterState = [testBook];
        expect(booksReducer([], addBook(testBook.title, testBook.author))).toEqual(afterState);
    })

    it('should remove book from state', () => {
        const book2 = {id: 2};
        const beforeState = [testBook, book2];
        const afterState = [book2];
        expect(booksReducer(beforeState, removeBook(testBook.id))).toEqual(afterState);
    })

    it('should update edited book', () => {
        const beforeState = [testBook];
        const afterState = [{...testBook, title: 'aaa', author: 'bbb'}];
        expect(booksReducer(beforeState, editBook(testBook.id, 'aaa', 'bbb'))).toEqual(afterState);
    })

    it('should switch editable flag for the particular book', () => {
        const beforeState = [testBook];
        const book2 = { ...testBook, editable: true };
        const afterState = [book2];
        expect(booksReducer(beforeState, switchEditable(testBook.id))).toEqual(afterState);
    })
})
