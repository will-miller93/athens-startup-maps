import React from 'react';

export const Logout = () => {
    return (
        <li className="nav-item">
            <a className="nav-link" href="!#"> Logout </a>
        </li>
    )

};

// this may need to be stateful yet.
// this will require funtionality to clear session tokens created by Auth0
