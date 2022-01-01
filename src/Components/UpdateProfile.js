import React, { Component } from 'react';
import {AuthContext} from '../contexts/AuthContexts';
import 'regenerator-runtime/runtime'


class UpdateProfile extends Component{

    state = {
        email: '',
        error: '',
        loading: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            this.setState({loading: true})
            this.setState({error: ''});
            await this.context.updateProfile(this.state.email);
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
                    <button disabled={this.state.loading} type="submit">Update Profile</button>
                </form>
            </>
        );
    }
}

UpdateProfile.contextType = AuthContext;

export default UpdateProfile;