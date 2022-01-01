import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard: Hello</h1>
            <Link to="/update-profile">Update Profile</Link>
        </div>
    )
}

export default Dashboard;
