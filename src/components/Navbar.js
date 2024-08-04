import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">
                        <i className="fas fa-truck icon"></i> MY MOVES
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" activeClassName="active">
                    <i class="fas fa-user-alt icon"></i> MY PROFILE
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/getquote" activeClassName="active">
                    <i class="fas fa-file-invoice icon"></i> GET QUOTE
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/logout" activeClassName="active">
                    <i class="fas fa-sign-out-alt icon"></i> LOGOUT
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
