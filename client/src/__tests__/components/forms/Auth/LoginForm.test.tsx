import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LoginForm from '../../../../components/forms/Auth/LoginForm';

describe('Render LoginForm', () => {
  let wrapper: ShallowWrapper<any>;
  beforeEach(() => {
    wrapper = shallow(<LoginForm resetPass={() => {}} />);
  });

  it('should check if LoginForm is rendered', () => {
    expect(wrapper.find('#login_form')).toHaveLength(1);
  });
});
