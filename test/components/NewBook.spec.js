import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import NewBook from '../../src/components/NewBook.js'

function setup(title, author) {
    return shallow(
        <Book title={title} author={author} />
    )
}

describe("NewBook component tests", () => {
    let component;

    beforeEach(() => {
        const wrapper = shallow(
            <NewBook />
        );

        component = wrapper.find(NewBook);
    });

    it("should render ", () => {
        const title = "New book"
        const author = "Classy author"
        const component = setup(title, author)
        expect(component.find(".book__title").text()).toBe(title);
        expect(component.find(".book__author").text()).toBe(author);
    })
})
