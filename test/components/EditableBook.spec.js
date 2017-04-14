import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'
import EditableBook from 'components/EditableBook'
import { BookAuthor, BookTitle } from 'components/Book'

describe("EditableBook component tests", () => {
    let component;
    const onBookAdd = expect.createSpy();
    const onCancelAction = expect.createSpy();
    const testAuthor = 'Test Author';
    const testTitle = 'Test Title';

    beforeEach(() => {
        component = mount(
            <EditableBook
                onComplete={onBookAdd}
                onCancel={onCancelAction}
                author={testAuthor}
                title={testTitle}
            />
        );
    });

    it("should render", () => {
        expect(component.length).toBeTruthy();
    });

    it("should call onComlete() when Enter pressed", () => {
        component.find('input').first().simulate('keyDown', { keyCode: 13 });
        expect(onBookAdd).toHaveBeenCalled();
    });

    it("should call onCancel() when Escape pressed", () => {
        component.find('input').first().simulate('keyDown', { keyCode: 27 });
        expect(onCancelAction).toHaveBeenCalled();
    });

    it("should render author passed in", () => {
        expect(component.find(BookAuthor).find('input').props().value).toBe(testAuthor);
    });

    it("should render title passed in", () => {
        expect(component.find(BookTitle).find('input').props().value).toBe(testTitle);
    });
});
