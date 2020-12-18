import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        console.log('Hey');
    }, []);

    useEffect(() => {
        console.log('formState cambió');
    }, [formState]);

    const { name, email } = formState;

    const _handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
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

            {(name === '123') && <Message />}
        </>
    )
}
