import React from "react"
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"; 
const NavBar = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* <Link className="navbar-brand" to="/">Pupster</Link> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-link"> 
                <NavLink className="nav-link" to="/"
                    isActive={()=> window.location.pathname=== "/" || 
                window.location.pathname === "/Home"}
                >
                 Home</NavLink>
            </li>
            <li className="nav-link">
                <NavLink className="nav-link" to="/PreviousWork">WCX Work</NavLink>
            </li>
            <li className="nav-link">
                <NavLink className="nav-link" to="/Contact">Contact WCX</NavLink>
            </li>
            <li className="nav-link">
                <NavLink className="nav-link" to="/AboutMe">About WCX</NavLink>
            </li>
        </ul>
    </div>
</nav>






    )
}

export default NavBar;