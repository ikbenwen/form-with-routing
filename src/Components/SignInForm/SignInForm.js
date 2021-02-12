import React, {useState, useContext, useEffect} from "react";
import { useHistory} from 'react-router-dom';
import {useForm} from "react-hook-form";
import axios from "axios";
import {AuthContext, useAuthState} from "../../context/AuthContext";
import "../Styles/Form.css"

// const endpointLink = 'https://polar-lake-14365.herokuapp.com//api/auth/signin'

export default function SignInForm() {
    const {register, errors, handleSubmit} = useForm();

    // const onSubmit = (data, e) => {
    //     e.target.reset()
    //     console.log(data)
    // };

    // function SignIn() {

    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();

    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/profile');
        }
    }, [isAuthenticated]);

    async function onSubmit(data) {
        console.log(data);

        try {
            const response = await axios.post('https://polar-lake-14365.herokuapp.com//api/auth/signin', {
                username,
                password,
            })

            login(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form className="registrationForm" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <h1>Sign In</h1>

                <label htmlFor="details-name">
                    username:
                    <input
                        type="text"
                        name="username"
                        id="details-name"
                        ref={register({required: true})}
                    />
                </label>
                {errors.username && <p>Dit veld is verplicht</p>}

                <label htmlFor="details-password">
                    wachtwoord:
                    <input
                        type="password"
                        name="password"
                        id="details-password"
                        ref={register({required: true})}
                    />
                </label>
                {errors.password && <p>Dit veld is verplicht</p>}

            </fieldset>
            <button type="submit">submit</button>
        </form>

    );
}
