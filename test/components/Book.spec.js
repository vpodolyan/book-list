import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Book from '../../src/components/Book.js'

function setup(title, author) {
    return shallow(
        <Book title={title} author={author} />
    )
}

describe("Book component tests", () => {
    it("should render title and author", () => {
        const title = "New book"
        const author = "Classy author"
        const component = setup(title, author)
        expect(component.find(".book__title").text()).toBe(title);
        expect(component.find(".book__author").text()).toBe(author);
    })
})
