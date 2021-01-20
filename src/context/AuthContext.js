import React, { createContext, useContext, useEffect, useState  } from 'react';

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        states: 'pending',
        error: null,
        user: null,
    })

useEffect(() => {

    setTimeout(() => {
        setAuthState({
            ...authState,
            status: 'done',
        })
    },2000)
}, []);

    function login (data) {
        localStorage.setItem('token', data.accessToken);

        setAuthState({
            ...authState,
            user: {
                username: data.username,
                email: data.email,
                roles: data.roles,
            }
        })
    }

    function logout () {

    }

    // const providerData = {
    //     ...authState,
    //     login,
    //     logout,
    // }

    return (
        <AuthContext.Provider value={{...authState, login, logout}}>
            { authState.status === 'done' && children }
            { authState.status === 'pending' && <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

function useAuthState() {
    const authState = useContext(AuthContext);

    // iemand is geauthoriseerd wanneer de status === 'done'
    // en als er een gebruiker in de authState staat
    const isDone = authState.status === 'done';
    const isAuthenticated = authState.user !== null && isDone;

    // console.log('Ik ben authenticated:', isAuthenticated);

    return {
        ...authState,
        isAuthenticated: isAuthenticated,
    }
}

export {
    AuthContext,
    useAuthState,
    AuthContextProvider,
}
