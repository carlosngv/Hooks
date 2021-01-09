import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    useEffect(() => {
        // ????
    }, [increment]);

    return (
        <div>
            <h1>useCallback Hook</h1>
            <hr />
            <h2>{counter}</h2>
            <ShowIncrement increment={increment} />
        </div>
    )
}
