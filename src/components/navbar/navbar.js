import React, { Component } from 'react';
import {Title} from '../navElements/title/title';
import {Login} from '../navElements/login/login';
import {Logout} from '../navElements/logout/logout';
import {Dashboard} from '../navElements/dashBoard/dashBoard';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <Title />
                    <Login />
                    <Logout />
                    <Dashboard />
                </ul>
            </nav>
        )
    }
}
export default Navbar;