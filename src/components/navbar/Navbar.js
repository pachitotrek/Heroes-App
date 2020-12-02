import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const {user,dispatch} = useContext(AuthContext);
    

    const handleLogout =(e)=>{
        dispatch({
            type:types.logout
        })  
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="./">Heroes APP</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                        <NavLink exact activeclassname="active"   className="nav-link" to="./home">Home </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink  exact activeclassname="active" className="nav-link" to="./dc">Heroes DC</NavLink>
                    </li>   
                    <li className="nav-item">
                        <NavLink exact activeclassname="active"  className="nav-link" to="./marvel">Heroes Marvel</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeclassname="active"  className="nav-link" to="./search">Search Heroes</NavLink>
                    </li>                 
                  
                </ul>
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link">
                        {user.name}
                    </span>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
