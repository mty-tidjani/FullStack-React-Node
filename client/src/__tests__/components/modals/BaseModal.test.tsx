import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Modal } from 'reactstrap';
import BaseModal from '../../../components/modals/BaseModal';

describe('BaseModal', () => {
  let wrapper: ShallowWrapper<any>;

  beforeEach(() => {
    wrapper = shallow(<BaseModal />);
  });

  it('should check if BaseModal is rendering Modal', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
