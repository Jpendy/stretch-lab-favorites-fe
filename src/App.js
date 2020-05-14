import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import HomePage from './HomePage.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import request from 'superagent';
import Favorites from './Favorites.js';

export default class App extends Component {

    state = {
        token: ''
    }

    componentDidMount = () => {
        const token = localStorage.getItem('TOKEN_KEY');
        this.setState({
            token: token
        })
    }

    render() {
        return (
            <div>
                {/* <Header> */}
                <Router>
                    <Switch>

                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <HomePage tokenProp={this.state.token} {...routerProps} />}                       
                        />
                        <Route
                            path="/SignUp/"
                            exact
                            render={(routerProps) => <SignUp {...routerProps} />}

                        />

                          <Route
                            path="/SignIn"
                            exact
                            render={(routerProps) => <SignIn tokenProp={this.state.token} {...routerProps} />}

                        />
                          <Route
                            path="/favorites"
                            exact
                            render={(routerProps) => <Favorites tokenProp={this.state.token} {...routerProps} />}

                        />
                        

                    </Switch>
                </Router>
            </div>
        )
    }
}
