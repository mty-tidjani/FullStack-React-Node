import React from 'react';
// import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import Home from '../../../pages/Home';

describe('Render home', () => {
  let wrapper: ShallowWrapper<any>;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should check if Home is rendered', () => {
    expect(wrapper.find('#home_main').text()).toContain('dashboardICO');
  });
});
