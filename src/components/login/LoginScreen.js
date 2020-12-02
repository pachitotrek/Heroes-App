import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch}  = useContext(AuthContext);

    const lastpath = localStorage.getItem('lastpath') || "/";
    
    const handleLogin= ()=>{   
        
        dispatch({
            type:types.login,
            payload:{
                name:'fernando'
            }
        })
        history.replace(lastpath);

    };


    return (
        <div className="container mt-5">
            <h1 className="mb-4">Login</h1>

            <button
            className="btn btn-primary"
            onClick={handleLogin}>
                Login
            </button>

        </div>
    )
}
