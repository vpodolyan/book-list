import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import Book, {BookAuthor, BookTitle} from '../../src/components/Book.js'

function setup(title, author) {
    return mount(
        <Book title={title} author={author} />
    )
}

describe("Book component tests", () => {
    it("should render title and author", () => {
        const title = "New book"
        const author = "Classy author"
        const component = setup(title, author)
        expect(component.find(BookTitle).text()).toBe(title);
        expect(component.find(BookAuthor).text()).toBe(author);
    })
})
