import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import expect from 'expect';

import OverlayBody from '../../src/components/OverlayBody';

describe('OverlayBody component tests', () => {
    let component;
    const onOverlayBodyClick = expect.createSpy();

    beforeEach(() => {
        component = mount(
            <OverlayBody onOverlayBodyClick={onOverlayBodyClick} />
        );
    });

    it('should render', () => {
        expect(component.length).toBeTruthy();
    });

    it('should render body', () => {
        expect(component.find("div").length).toBe(1);
    });

    it('should call onOverlayBodyClick() when body has been clicked', () => {
        component.find("div").simulate('click');
        expect(onOverlayBodyClick).toHaveBeenCalled();
    });

});
