import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import Book, {BookAuthor, BookTitle} from '../../src/components/Book.js'

describe("Book component tests", () => {
    let component;
    const title = "New book";
    const author = "Classy author";
    const dblClick = expect.createSpy();

    beforeEach(() => {
        component = mount(
            <Book title={title} author={author} onDoubleClick={dblClick} />
        )
    })

    it("should render title and author", () => {
        expect(component.find(BookTitle).text()).toBe(title);
        expect(component.find(BookAuthor).text()).toBe(author);
    })

    it('should call onDoubleClick() when double click is made', () => {
        component.simulate('dblclick');
        expect(dblClick).toHaveBeenCalled();
    })
})
