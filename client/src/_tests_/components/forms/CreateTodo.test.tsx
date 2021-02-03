import React from 'react';
import {
  shallow, ShallowWrapper,
} from 'enzyme';
import CreateTodo from '../../../components/forms/CreateTodo';
import { Todo } from '../../../types/models';

describe('CreateTodo', () => {
  let wrapper: ShallowWrapper<any>;
  const todo: Todo = { _id: 'xxx', nm: 'MOMO' };
  beforeEach(() => {
    wrapper = shallow(<CreateTodo />);
  });

  it('CreateTodo renders without crash', () => {
    expect(wrapper.find('.create_todo')).toHaveLength(1);
  });

  it('Should check if CreateTodo renders todo Name', () => {
    expect(wrapper.find('.create_todo').text()).toContain(todo.nm);
  });
});
