import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, _handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const _handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={_handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />
            <div className="form-group" >
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={_handleInputChange} />
            </div>
            <div className="form-group" >
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={_handleInputChange} />
            </div>
            <div className="form-group" >
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Tu contraseña"
                    value={password}
                    onChange={_handleInputChange} />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}
