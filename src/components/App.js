import React, { Component } from 'react';
import '../styles/index.css'
import Form from './Form';
import ViewData from './ViewData';
import EditForm from './EditForm';

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className='App'>
                                <h1>Hero Management App</h1>
                <div className='grid'>
                <div className='col-md-4'>
                    <Form/>
                </div>
                <div className='col-md-4'>
                    <ViewData/>
                </div>
                <div className='col-md-4'>
                    <EditForm/>
                </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;