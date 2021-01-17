import React from "react";
import { useForm } from "react-hook-form";
import '../Form.css';

export default function RegistrationForm () {
    const { register,reset ,errors, handleSubmit } = useForm();

    // function onSubmit(data){
    //     console.log(data)
    // }

    const onSubmit = (data, e) => {
        e.target.reset()
        console.log(data)
        // reset after form submit
    };

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