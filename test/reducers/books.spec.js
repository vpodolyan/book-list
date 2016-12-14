import expect from 'expect'
import Immutable from 'immutable'
import { addBook, removeBook, editBook } from '../../src/actions'
import booksReducer from '../../src/reducers/books'


describe('books reducer tests', () => {
    const testBook = {id: 1, title: 'Test', author: 'Test Author'};

    it('should add new book to state', () => {
        const afterState = [testBook];
        expect(booksReducer([], addBook(testBook.title, testBook.author))).toEqual(afterState);
    })

    it('should remove book from state', () => {
        const beforeState = [testBook];
        const afterState = [];
        expect(booksReducer([], removeBook(testBook.id))).toEqual(afterState);
    })

    it('should update edited book', () => {
        // const beforeState = ImmutabletestBook];

    })
})
