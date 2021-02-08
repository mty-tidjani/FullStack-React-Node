import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../../pages';

describe('App', () => {
  let wrapper: ShallowWrapper<any>;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should check if App is rendering router component', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
  });
});
