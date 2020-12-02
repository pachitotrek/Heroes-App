import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import propTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {

    localStorage.setItem('lastpath',rest.location.pathname);

    return (
        <Route {...rest} 
        component={(props)=>(
            (isAuthenticated)
            ?(<Component {...props} />)
            :(<Redirect to="/login" />)
        )}        
        />           
    )
}


PrivateRoute.propTypes={
    isAuthenticated:propTypes.bool.isRequired,
    component:propTypes.func.isRequired    
}