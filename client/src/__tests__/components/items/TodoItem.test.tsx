import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import TodoItem from "../../../components/items/TodoItem";
import { Todo } from "../../../types/model";

describe("TodoItem", () => {
  let wrapper: ShallowWrapper<any>;
  const todo: Todo = { _id: "xxx", nm: "MOMO" };
  beforeEach(() => {
    wrapper = shallow(<TodoItem todo={todo} />);
  });

  it("Todo renders without crash", () => {
    expect(wrapper.find(".item_todo")).toHaveLength(1);
  });

  it("Should check if todo renders todo Name", () => {
    expect(wrapper.find(".item_todo").text()).toContain(todo.nm);
  });
});
