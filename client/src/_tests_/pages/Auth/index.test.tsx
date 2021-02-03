import React from 'react';
import {
  shallow, ShallowWrapper,
} from 'enzyme';
import Auth from '../../../pages/Auth';
import AuthModal from '../../../components/modals/AuthModal';

describe('Render Auth', () => {
  let wrapper: ShallowWrapper<any>;
  beforeEach(() => {
    wrapper = shallow(<Auth />);
  });

  it('should check if Auth is rendered', () => {
    expect(wrapper.find('#auth_main')).toHaveLength(1);
  });

  it('should check if AuthModal is Rendered', () => {
    expect(wrapper.find(AuthModal)).toHaveLength(1);
  });
});
