//Context API is for data that can be considered as global for a tree of React Component e.g current authenticated user, theme, or preffered language

import React, {Component} from 'react';

class ContextApi extends Component {
 
    state = {
        name: 'Satinder Singh',
        age: 26,
        cool: true
    }

    render (){
        return (
            <div>
                This is Context Api Example
                <li>{this.state.name}</li>
                <li>{this.state.age}</li>
                <li>{this.state.cool && 'I am cool'}</li>
                <Family>
                    <Person name={this.state.name}/>
                </Family>
            </div>
        );
    }
}

class Person extends Component {
    render (){
        return (
            <div>
                I am a {this.props.name}
            </div>
        );
    }
}

const Family = ({children}) => {
    return (
        <div>
            <div>This is family</div>
            {children}
        </div>
    );
}

export default ContextApi;
