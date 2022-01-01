import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContexts';
import {useHistory} from 'react-router-dom';


function Logout() {

    const [error, setError] = useState("");
    const value = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError("");

        try{
            await value.logout(); 
            history.push('/signin');    
        }catch(e){
            setError("Logout Doesn't Work");
        }
    }

    return (
        <div>
            {error && <h2>{error}</h2>}
            <h3>Email: {value.currentUser && JSON.stringify(value.currentUser.email)} </h3>
           <button onClick={handleLogout}>Logout</button> 
           <Link to="/signin">Sign In</Link>
           <Link to="/signup">Sign Up</Link>
           <Link to="/update-profile">Update Profile</Link>
        </div>
    )
};

export default Logout;
