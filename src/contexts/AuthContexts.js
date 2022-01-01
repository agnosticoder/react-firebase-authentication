import React, { Component, useContext } from 'react';
import {auth} from '../firebase/firebase';

//Create Context to store authenicated user
export const AuthContext = React.createContext();

//Storing code used to get AuthContext Value in function. So it will be easy to access value just by calling this function
export const useAuth = () => useContext(AuthContext);

export class AuthProvider extends Component{
    unsubscribe = null;
    state = {
        currentUser: null,
        signup: (email, password) => {
            return auth.createUserWithEmailAndPassword(email, password);
        },
        signin: (email, password) => {
            return auth.signInWithEmailAndPassword(email,password);
        },
        logout: () => {
            return auth.signOut();
        },
        changePassword: (email) => {
            return auth.sendPasswordResetEmail(email);
        },
        updateProfile: (email) => {
            return auth.currentUser.updateEmail(email);
        },
        loading: true
    }

    componentDidMount = () => {
        this.unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ currentUser: user })
                this.setState({ loading: false })
            } else {
                console.log("Not logged In!");
            }
        })
    }

    componentWillUnmount = () => {
        this.unsubscribe && this.unsubscribe();
    }

    render(){
        return(
            <div>
                <AuthContext.Provider value={this.state}>
                    {this.props.children}
                </AuthContext.Provider>
            </div>
        );
    }
}