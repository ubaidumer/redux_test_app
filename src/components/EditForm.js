import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { edit } from './../action/index';

class EditForm extends Component {
    constructor(props) {
        super(props);

    }
     OnSubmit(id,name,age,power) {
         console.log(id,name,age,power)
       this.props.edit(id,name,age,power);
    }

    render() {
        return (
            <div>
                    <h3>Hero Name</h3>
                    <input type='text' id='ename' ></input>
                    <label>oldname:{this.props.select.name}</label>
                    <h3>Hero Age</h3>
                    <input type='text' id='eage' ></input>
                    <label>oldname:{this.props.select.age}</label>
                    <h3>Hero Power</h3>
                    <select id="epower" name="heropower">
                    
                    <option value='0'>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
    </select>
    <label>oldname:{this.props.select.power}</label>
    <h3>Edit Hero</h3>
    <input type='submit' onClick={()=>this.OnSubmit(this.props.select.id,document.getElementById('ename').value,document.getElementById('eage').value,document.getElementById('epower').value)}></input>
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log('state',state);
    return{
        select:state.select
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({edit},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(EditForm);