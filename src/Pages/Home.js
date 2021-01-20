import React from 'react';
import {useAuthState} from "../context/AuthContext";

function Home () {
    const { isAuthenticated } = useAuthState();
    console.log(isAuthenticated);
    return (
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home;