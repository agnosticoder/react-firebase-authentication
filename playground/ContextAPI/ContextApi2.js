import React, {Component, useContext} from 'react';

const ThemeContext = React.createContext();
ThemeContext.displayName = 'ThemeContext';

class ThemeProvider extends Component{



    toggleTheme = () => {
        this.setState(prevState => {
            return {
                darkTheme: !prevState.darkTheme
            }
        })
    }

    state = {
        darkTheme: false,
        toggleTheme: this.toggleTheme
    }


    render(){
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                        {this.props.children}
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default function ContextApi2() {
    return(
        <div>
            <ThemeProvider>
                <Controls />
                <FunctionContextComponent />
                <ClassContextComponent />
            </ThemeProvider>
        </div>
    );
}
    

function Controls() {

    const darkTheme = useContext(ThemeContext);

    return (
        <div>
            <input type="checkbox" checked={darkTheme.darkTheme} onChange={darkTheme.toggleTheme} />
            <span>Toggle Theme</span>
        </div>
    );
}


const FunctionContextComponent = () => {

    //No need for complex <ThemeContext.Consumer> Component
    const darkTheme = useContext(ThemeContext);

    return(
        <div>
            <div className={`contextApp ${darkTheme.darkTheme ? 'dark' : 'light'}`}>
                <h1>Functional Component</h1>
            </div>
        </div>
    );
}

class ClassContextComponent extends Component {

    static contextType = ThemeContext;

    render(){
        return(
            <div>
                <div className={`contextApp ${this.context.darkTheme ? 'dark' : 'light'}`}>
                    <h1>Class Component</h1>
                </div>
            </div>
        );
    }
}