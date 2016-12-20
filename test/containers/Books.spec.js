import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import expect from 'expect'

import FakeStore from '../utils/FakeStore'
import Books from '../../src/containers/Books'
import BookList from '../../src/components/BookList'

describe('Books container component tests', () => {
    let component;

    beforeEach(() => {
        const store = FakeStore({ books: []});

        const wrapper = mount(
            <Provider store={store}>
                <Books />
            </Provider>
        );

        component = wrapper.find(Books);
    });

    it('should render', () => {
        expect(component.length).toBeTruthy();
    })
})
