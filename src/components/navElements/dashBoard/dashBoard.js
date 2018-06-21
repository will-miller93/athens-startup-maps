import React from 'react';

export const Dashboard = () => {
    return (
        <li className="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dashboard
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/communitydashboard">Community Organizer</a>
                <a class="dropdown-item" href="/startupdashboard">Start Up</a>
            </div>
        </li>
    )
};
// this will be an on click but the function will be passed down through props.
