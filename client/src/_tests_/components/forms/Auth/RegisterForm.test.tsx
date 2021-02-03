import React from 'react';
import {
  shallow, ShallowWrapper,
} from 'enzyme';
import RegisterForm from '../../../../components/forms/Auth/RegisterForm';

describe('Render LoginForm', () => {
  let wrapper: ShallowWrapper<any>;
  beforeEach(() => {
    wrapper = shallow(<RegisterForm />);
  });

  it('should check if RegisterForm is rendered', () => {
    expect(wrapper.find('#register_form').text()).toContain('Sign up');
  });
});
