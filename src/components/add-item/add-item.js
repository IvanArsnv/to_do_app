import React , {Component}  from "react";

import './add-item.css'
export default class AddItem extends Component {
    state = {
        label: ''
    }

    
   onLabelChange = (e) => {
       // in html onChange will take text from input and (e.target.value) to extract text
       this.setState({
           label: e.target.value
       })
   
   }
   onSubmit = (e) => {
       e.preventDefault(); // при  этом методе не будет перезагружать отправку формы
       this.props.onAdded(this.state.label);
       this.setState({
           label: ''
       })
   }
   render() {
        return (
        <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                    value={this.state.label }/> 
            
                <button 
                className="btn btn-outline-secondary" 
                >
                Add </button>
            
        </form>
        );
   }
};

