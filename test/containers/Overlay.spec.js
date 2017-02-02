import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import expect from 'expect';

import FakeStore from '../utils/FakeStore';
import Overlay from '../../src/containers/Overlay';
import OverlayBody from '../../src/components/OverlayBody';

describe('Overlay container component tests', () => {
    let container;
    let component;

    const initialState = { books: [], addBookButton: { isActive: false } };

    beforeEach(() => {
        const store = FakeStore(initialState);

        const wrapper = mount(
            <Provider store={store}>
                <Overlay />
            </Provider>
        );

        container = wrapper.find(Overlay);
        component = wrapper.find(OverlayBody);
    });

    it('should render Overlay', () => {
        expect(container.length).toBeTruthy();
    });

    it('should render OverlayBody component', () => {
        expect(component.length).toBeTruthy();
    });

});
