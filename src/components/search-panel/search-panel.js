import React from 'react'
import './search-panel.css'

export default class SearchPanel extends React.Component {
  // search bar 
  // 1. take user input from form
  // 2. find in state user's input
  //  2.1 clone state links to new state for render
  //  2.2 make this new state available in render list menu  
  // 3. render list with items that comes from search state
  state = {
    value: ''
  }
  
  handleChange = (event) => {
    this.setState({value: event.target.value})
    console.log(this.state.value)
  }
  onSubmit = (event) => {
    
    event.preventDefault();
    
  }
  render() {
    return ( 
    <form>
      
      
      <input 
        type = "text"
        className = "form-control search-input"
        placeholder = "type to search"
        value={this.state.value}
        onChange={this.handleChange} />
    </form>
    );
  };
  };