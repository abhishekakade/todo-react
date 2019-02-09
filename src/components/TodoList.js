import React, { Component } from 'react'
import TodoItem from './TodoItem';
// import TodoInput from './TodoInput';

export default class TodoList extends Component {

  // handleClickFunc = () => {
  //   const addTodo = document.getElementById('add-todo');
  //   console.log(addTodo);
  // }

  render() {

    const { items } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Todo List</h3>

          {

            items.map(item => {
              return(
                <TodoItem key={item.id} title={item.title} />
              );
            })

          }

          <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">Clear List</button>
        </ul>
      </div>
    )
  }
}
