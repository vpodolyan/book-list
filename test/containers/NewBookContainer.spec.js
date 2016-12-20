import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import expect from 'expect'

import FakeStore from '../utils/FakeStore'
import NewBookContainer from '../../src/containers/NewBookContainer'
import NewBook from '../../src/components/NewBook'

describe('NewBooksContainer component tests', () => {
    let container;
    let component;

    beforeEach(() => {
        const store = FakeStore({ books: []});

        const wrapper = mount(
            <Provider store={store}>
                <NewBookContainer />
            </Provider>
        );

        container = wrapper.find(NewBookContainer);
        component = wrapper.find(NewBook);
    });

    it('should render', () => {
        expect(container.length).toBeTruthy();
    })

    it('should render NewBook component', () => {
        expect(component.length).toBeTruthy();
    })
})
