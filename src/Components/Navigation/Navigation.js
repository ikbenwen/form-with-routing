import React from 'react';
import './Navigation.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "../../Pages/Home";
import SignUp from "../../Pages/SignUp";
import SignIn from "../../Pages/SignIn";
import Profile from "../../Pages/Profile";


export default function Navigation () {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li>
                            <Link to="/signin">Sign in</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/">
                        <h1>404 not found, sufferd</h1>
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}