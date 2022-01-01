import React from 'react';
import { AuthProvider } from '../contexts/AuthContexts';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Header from './Header';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import PrivateRoute from './PrivateRoute';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';





const App = () => {
    return (
        <div className="container">
            <Router>
                <AuthProvider>
                    <Header />
                    <Switch>
                        <PrivateRoute path="/" exact component={Dashboard} />
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/signin" component={SignIn}/>
                        <Route path="/forgot-password" component={ForgotPassword}/>
                        <Route path="/update-profile" component={UpdateProfile}/>
                    </Switch>
                </AuthProvider>
            </Router>
            
        </div>
    );
}

export default App;