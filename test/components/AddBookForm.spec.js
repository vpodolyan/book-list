import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'
import AddBookForm from '../../src/components/AddBookForm.js'

describe("AddBookForm component tests", () => {
    let component;
    const onBookAdd = expect.createSpy();

    beforeEach(() => {
        component = mount(
            <AddBookForm onBookAdd={onBookAdd} />
        );
    });

    it("should render", () => {
        expect(component.length).toBeTruthy();
    });

    it("should call onBookAdd() when Enter pressed", () => {
        component.find('input').first().simulate('keyDown', { keyCode: 13 });
        expect(onBookAdd).toHaveBeenCalled();
    });
});
