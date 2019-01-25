import React, { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {
  
  state = {
      done: false,
      important: false
    };
  
  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    })
  }
  onMarkImportant = () => {
    this.setState(({important}) => { //so if setState going to change => make func with state in  prop (state)
      return {
        important: !important
    };
  })
  }

  render() {

    const { label, onDeleted} = this.props; //деструктизация от this.props которые передали в параметрах todo-list
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
   if (important) {
     classNames += ' important'
   }
    
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label "
          onClick={this.onLabelClick} >
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
    };
  };
