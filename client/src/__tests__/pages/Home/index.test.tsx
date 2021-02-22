import React from 'react';
// import { render, screen } from '@testing-library/react';
import Home from '../../../pages/Home';
import { render } from '../../../test.utils';

describe('Render home', () => {
  // let wrapper: ;

  // beforeEach(() => {

  // });

  it('should check if Home is rendered', () => {
    const wrapper = render(<Home projects={[]} />, {
      initialState: { projects: [] },
    });
    // Fixing test before checking a solution for redux

    expect(wrapper.getAllByText(/Projects/i).length).toBeGreaterThanOrEqual(1);
  });
});
