import React, {Component} from 'react';
import {AuthContext} from '../contexts/AuthContexts';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class SignIn extends Component{

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            this.setState({loading: true})
            this.setState({error: ''});
            await this.context.signin(this.state.email, this.state.password);
            this.props.history.push("/");
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    </label>
                    <button disabled={this.state.loading} type="submit">Sign In</button>
                    <div>
                        Create an Account!
                        <Link to="/signup">SignUp</Link>
                    </div>
                    <div>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </form>
                </>
        );
    }
}

SignIn.contextType = AuthContext;

export default withRouter(SignIn);