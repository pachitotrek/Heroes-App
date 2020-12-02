import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import propTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    return (
        <Route {...rest} 
        component={(props)=>(
            (!isAuthenticated)
            ?(<Component {...props} />)
            :(<Redirect to="/" />)
        )}        
        />           
    )
}


PublicRoute.propTypes={
    isAuthenticated:propTypes.bool.isRequired,
    component:propTypes.func.isRequired    
}