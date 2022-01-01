import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContexts';

const PrivateRoute = ({component: Component, ...rest}) => {
    const {currentUser} = useAuth();
    console.log(currentUser);
    return (
        <div>
            <Route {...rest}>
                {!currentUser ? <Redirect to="/signin" /> : <Component />}
            </Route>
        </div>
    )
}

export default PrivateRoute;
