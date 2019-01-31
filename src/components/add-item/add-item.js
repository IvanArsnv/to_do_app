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
       this.props.onItemAdded(this.state.label)
   }
   render() {
        return (
        <form className="input-group mb-3 item-add-form d-flex"
            onSubmit={this.onSubmit}
            >
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"/>
            

            <div className="input-group-prepend">
                <button 
                className="btn btn-primary" 
                type="button" id="button-addon1" 
                onClick={() => this.props.onAdded('hello')}>
                Add</button>
            </div>
        </form>
        );
   }
};

