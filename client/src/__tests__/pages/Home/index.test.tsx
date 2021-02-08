import React from 'react';
// import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import Home from '../../../pages/Home';
import { configureStore } from '../../../store';

describe('Render home', () => {
  let wrapper: ShallowWrapper<any>;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={configureStore()}>
        <Home />
      </Provider>
    );
  });

  it('should check if Home is rendered', () => {
    // Fixing test before checking a solution for redux
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
