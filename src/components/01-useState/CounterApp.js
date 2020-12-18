import React, { useState } from 'react'
import './counter.css';
export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
    });
    const { counter2, counter1 } = state;
    return (
        <>
            <h1>{counter1}</h1>
            <h2>{counter2}</h2>
            <button
                className="btn btn-primary"
                onClick={() => setState({
                    ...state, // Extrae las propiedades del estado ya definidas
                    counter1: counter1 + 1
                })}
            >
                Incrementar
            </button>
        </>
    )
}
