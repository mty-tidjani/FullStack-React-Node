import React from 'react';
import {
  shallow, ShallowWrapper,
} from 'enzyme';
import CreateTodo from '../../../components/forms/CreateTodo';

describe('CreateTodo', () => {
  let wrapper: ShallowWrapper<any>;
  beforeEach(() => {
    wrapper = shallow(<CreateTodo />);
  });

  it('CreateTodo renders without crash', () => {
    expect(wrapper.find('.create_todo')).toHaveLength(1);
  });
});
