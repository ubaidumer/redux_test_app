import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { submit } from '../action';
class Form extends Component {
    constructor(props) {
        super(props);

    }
     OnSubmit(name,age,power) {
       this.props.submit(name,age,power);
    }



    render() {
        return (
            <div>
                    <h3>Hero Name</h3>
                    <input type='text' id='name'></input>
                    <h3>Hero Age</h3>
                    <input type='text' id='age'></input>
                    <h3>Hero Power</h3>
                    <select id="power" name="heropower" >
                    <option value='0'>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
    </select>
    <h3>Add Hero</h3>
    <input type='submit' onClick={()=>this.OnSubmit(document.getElementById('name').value,document.getElementById('age').value,document.getElementById('power').value)}></input>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({submit},dispatch)
}
export default connect(null,mapDispatchToProps)(Form);