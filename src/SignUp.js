import React, { Component } from 'react'
import request from 'superagent';


export default class SignUp extends Component {
     
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        let token = await request.post('http://localhost:3000/auth/SignUp', this.state)
        // console.log(token)


        // let stringToken = JSON.stringify(token.body)
        localStorage.setItem('TOKEN_KEY', token.body.token)
    }

    handleChange = (e) => {
        const newState = {}
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        const {email, password} = this.state;
        return (
            <div>
                
            <form onSubmit= { this.handleSubmit }>

                <label>
                    Email:
                    <input onChange={this.handleChange} name="email" value={email} />
                </label>

                <label>
                    Password:
                    <input onChange={this.handleChange} name="password" value={password} />
                </label>

                <button>Submit</button>

            </form>

            </div>
        )
    }
}
