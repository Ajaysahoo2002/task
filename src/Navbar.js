import React from 'react'
import "./navbar.css";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <NavLink className="navbar-brand" href="#">
                    <img src="" alt="Company Logo" />
                </NavLink>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">
                                Services
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink className="nav-link" to="/signup">
                        <button>Sign In</button>
                    </NavLink>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
