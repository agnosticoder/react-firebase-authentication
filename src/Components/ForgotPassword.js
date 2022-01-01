import React, {Component} from 'react';
import {AuthContext} from '../contexts/AuthContexts';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class ForgotPassword extends Component{

    state = {
        email: '',
        error: '',
        loading: false,
        message: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            this.setState({loading: true})
            this.setState({error: ''});
            await this.context.changePassword(this.state.email);
            this.setState({message: "Check your inbox for further information!"});
        } catch(e) {
            console.log(e);
            this.setState({error: e.message}); 
        }

        this.setState({loading: false })
    }

    render() {
        return (
            <div>
                {this.state.error && <h1>{this.state.error}</h1>}
                <div className="center">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Email:
                        <input type="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                        </label>

                    <button disabled={this.state.loading} type="submit">Reset</button>
                    <div>
                        <Link to="/signin">SignIn</Link>
                    </div>
                </form>
                </div>
                {this.state.message && <h2>{this.state.message}</h2>}
            </div>
        );
    }
}

ForgotPassword.contextType = AuthContext;

export default withRouter(ForgotPassword);