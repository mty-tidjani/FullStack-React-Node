import { RenderResult, queries } from '@testing-library/react';
import React from 'react';
// import { render, screen } from '@testing-library/react';
import Home from '../../../pages/Home';
import { render } from '../../../test.utils';

describe('Render home', () => {
  let wrapper: RenderResult<typeof queries>;

  beforeEach(() => {
    wrapper = render(<Home projects={[]} />, {
      initialState: { projects: [] },
    });
  });

  it('should check if Home is rendered', () => {
    wrapper = render(<Home projects={[]} />, {
      initialState: { projects: [] },
    });
    // Fixing test before checking a solution for redux

    expect(wrapper.getAllByText(/Projects/i).length).toBeGreaterThanOrEqual(1);
  });
});
