import React, {useState, useContext, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {useForm} from "react-hook-form";
import axios from "axios";
import {AuthContext, useAuthState} from "../../context/AuthContext";
import '../Styles/Form.css'

export default function RegistrationForm () {
    const { register,reset ,errors, handleSubmit } = useForm();

    // function onSubmit(data){
    //     console.log(data)
    // }

    // const onSubmit = (data, e) => {
    //     e.target.reset()
    //     console.log(data)
    //     // reset after form submit
    // };
    const {login} = useContext(AuthContext);
    const {isAuthenticated} = useAuthState();

    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');
    const {email, setEmail}= useState('');

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/signin');
        }
    }, [isAuthenticated]);

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');

        try {
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/', {
                username,
                password,
                email,
            })

            login(response.data);
        } catch (e) {
            console.error(e);
            setError('Inloggen is mislukt');
        }
        toggleLoading(false);
    }



    return (
    <form className="registrationForm" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <h1>Registreer</h1>

            <label htmlFor="details-name">
                username:
                <input
                    type="text"
                    name="username"
                    id="details-name"
                    ref={register({ required: true })}
                />
            </label>
            {errors.username && <p>Dit veld is verplicht</p>}

            <label htmlFor="details-email">
                email:
                <input
                    type="email"
                    name="email"
                    id="details-email"
                    ref={register({ required: true })}
                />
            </label>
            {errors.email && <p>Dit veld is verplicht</p>}

            <label htmlFor="details-password">
                wachtwoord:
                <input
                    type="password"
                    name="password"
                    id="details-password"
                    ref={register({ required: true })}
                />
            </label>
            {errors.password && <p>Dit veld is verplicht</p>}

        </fieldset>
        <button type="submit" >submit</button>
    </form>
        )
}
