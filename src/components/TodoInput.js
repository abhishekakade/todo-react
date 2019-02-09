import React, { Component } from 'react';

export default class TodoInput extends Component {

  render() {
    
    const { item, handleChange, handleSubmit } = this.props;
  
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-dark text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input type="text" className="form-control text-capitalize" name="" 
              placeholder="Add a To-Do" id="add-todo" 
              value={item} 
              onChange={handleChange} 
            />
          </div>
          <button className="btn btn-block btn-dark mt-3" type="submit" 
            // onClick={this.handleClickFunc}
          >Add Item
          </button>
        </form>
      </div>
    )
  }
}
