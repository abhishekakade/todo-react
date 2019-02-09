import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {

    const { title } = this.props;

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">Hello there!
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-dark"><i className="fas fa-pen"></i></span>
          <span className="mx-2 text-danger"><i className="fas fa-trash"></i></span>
        </div>
      </li>
    )
  }
}
