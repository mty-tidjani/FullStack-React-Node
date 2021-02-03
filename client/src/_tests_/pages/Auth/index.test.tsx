import React from 'react';
import {
  shallow, ShallowWrapper,
} from 'enzyme';
import Auth from '../../../pages/Auth';

describe('Render Auth', () => {
  let wrapper: ShallowWrapper<any>;
  beforeEach(() => {
    wrapper = shallow(<Auth />);
  });

  it('should check if Auth is rendered', () => {
    expect(wrapper.find('#auth_main').text()).toContain('Sign up');
  });
});
