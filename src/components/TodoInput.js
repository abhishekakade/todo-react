import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-dark text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize bg-gradient-dark"
              name=""
              placeholder="Add a To-Do"
              id="add-todo"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            className={
              editItem
                ? "btn btn-block btn-outline-dark mt-3"
                : "btn btn-block btn-dark mt-3"
            }
            type="submit"
            // onClick={this.handleClickFunc}
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>
        </form>
      </div>
    );
  }
}
