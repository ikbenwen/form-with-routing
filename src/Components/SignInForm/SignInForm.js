import React from "react";
import { useForm } from "react-hook-form";


export default function SignInForm () {
    const { register, errors, handleSubmit } = useForm();

    function onSubmit(data){
        console.log(data)
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
                        ref={register({ required: true })}
                    />
                </label>
                {errors.username && <p>Dit veld is verplicht</p>}

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