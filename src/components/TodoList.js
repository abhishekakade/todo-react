import React, { Component } from "react";
import TodoItem from "./TodoItem";
// import TodoInput from './TodoInput';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Todo List</h3>

          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                /* cannot run handleDelete(item.id) as it needs to be passed in as a reference. 
                Using an arrow function that returns handleDelete(item.id) is the proper way of doing this 
                because we are running an arrow function and that arrow function implicitly returns this reference. */
                handleDelete={() => {
                  handleDelete(item.id);
                }}
              />
            );
          })}

          <button
            onClick={clearList}
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}
