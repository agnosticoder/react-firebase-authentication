import React, { Component } from 'react';
import {AuthContext} from '../contexts/AuthContexts';
import 'regenerator-runtime/runtime'
import SignIn from './SignIn';
import { Link } from 'react-router-dom';


class SignUp extends Component{

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        loading: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        //chech if both passwords match
        if(this.state.password !== this.state.confirmPassword){
            return this.setState({error: 'Password do not match!'})
        }

        try {
            this.setState({loading: true})
            this.setState({error: ''});
            await this.context.signup(this.state.email, this.state.password);
        } catch(e) {
            console.log(e);
            this.setState({error: e.message}); 
        }

        this.setState({loading: false })
    }

    render() {
        return (
            <>
                {this.state.error && <h1>{this.state.error}</h1>}
                {/* {this.context.currentUser && <h2>User: {JSON.stringify(this.context.currentUser)}</h2>} */}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    </label>
                    <label>
                        Password 
                        <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                    </label>
                    <label>
                        Confirm Password
                        <input type="password" placeholder="Confirm Password" value={this.state.confirmEmail} onChange={(e) => this.setState({confirmPassword: e.target.value})}/>
                    </label>
                    <button disabled={this.state.loading} type="submit">Sign Up</button>
                    <div>
                        Already have an account? 
                        <Link to="signin">Sign In</Link> 
                    </div>
                </form>
            </>
        );
    }
}

SignUp.contextType = AuthContext;

export default SignUp;