import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import AuthModal from '../../../components/modals/AuthModal';
import BaseModal from '../../../components/modals/BaseModal';

describe('AuthModal', () => {
  let wrapper: ShallowWrapper<any>;

  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter initialEntries={['/abc?']}>
        <AuthModal />
      </MemoryRouter>
    );
  });

  it('should check if AuthModal is rendering BaseModal', () => {
    expect(wrapper.find(AuthModal).dive().find(BaseModal)).toHaveLength(1);
  });
});
