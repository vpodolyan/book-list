import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import NewBook from '../../src/components/NewBook.js'

describe("NewBook component tests", () => {
    let component;

    beforeEach(() => {
        const wrapper = shallow(
            <NewBook />
        );

        component = wrapper.find(NewBook);
    });

    it("should render ", () => {
        expect(component).toBeTruthy();
    })
})
