import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PassResetForm from '../../../../components/forms/Auth/PassResetForm';

describe('Render PassResetForm', () => {
  let wrapper: ShallowWrapper<any>;
  beforeEach(() => {
    wrapper = shallow(<PassResetForm login={() => {}} token="xxxxx" />);
  });

  it('should check if PassResetForm is rendered', () => {
    expect(wrapper.find('#pass_reset')).toHaveLength(1);
  });
});
