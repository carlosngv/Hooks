import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(20);

    return (
        <div className="container">
            <h1>Counter with hook: {state}</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >Sumar</button>
            <button
                className="btn btn-primary"
                onClick={() => decrement()}
            >Restar</button>
            <button
                className="btn btn-primary"
                onClick={reset}
            >Reset</button>
        </div>
    )
}
