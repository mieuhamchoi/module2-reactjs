import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import "./Form.scss"

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginPage: true // true: login page, false: register
        };
    }

    handleSwitchPage = () => {
        this.setState({
            isLoginPage: !this.state.isLoginPage
        })
    }

    render() {
        return (
            <>
                {
                    this.state.isLoginPage ? <Login handleSwitchPage={this.handleSwitchPage}/> : <Register handleSwitchPage={this.handleSwitchPage}/>
                } 
            </>
        )
    }
}





