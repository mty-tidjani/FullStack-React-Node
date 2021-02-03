import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import AuthModal from '../../../components/modals/AuthModal';
import BaseModal from '../../../components/modals/BaseModal';

describe('AuthModal', () => {
  let wrapper: ShallowWrapper<any>;

  beforeEach(() => {
    wrapper = shallow(<AuthModal />);
  });

  it('should check if AuthModal is rendering BaseModal', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find(BaseModal)).toHaveLength(1);
  });
});
