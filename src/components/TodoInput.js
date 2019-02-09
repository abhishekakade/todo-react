import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-dark text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input type="text" className="form-control text-capitalize" name="" 
              placeholder="Add a To-Do" id="" />
          </div>
          <button className="btn btn-block btn-dark mt-3" type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}
