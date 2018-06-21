import React from 'react';
import Title from '../navElements/title';
import Login from '../navElements/login';
import Logout from '../navElements/logout';
import Dashboard from '../navElements/dashBoard';

export const NavBar = () => {
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
            <Title />
            <Login />
            <Logout />
            <Dashboard />
        </ul>
    </nav>
}