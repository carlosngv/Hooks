import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    const ref = useRef(); // Mantener referencia sobre el p tag
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(ref.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={ref}
                >
                    {quote}
                </p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Next quote
                </button>
        </div>
    )
}
