import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import BookList from '../../src/components/BookList.js'

function setup(books = []) {

    const component = shallow(
        <BookList books={books} />
    )

    return { component }
}

describe('BookList component', () => {
    it('should render Book child components', () => {
        const books = [{id:1}, {id:2}, {id:1}];
        const { component } = setup(books);
        expect(component.find('Book').length).toBe(books.length);
    })
})
