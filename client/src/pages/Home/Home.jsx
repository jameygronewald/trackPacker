import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <form className="login">
                <label htmlFor="email">Email</label>
                <input type="text" id="email-input" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password-input" />
                <button type="submit">Log In</button>
                <br></br>
                <Link to="/SignUp">Sign Up!</Link>
            </form>
        </div>
    );
};

export default Home;