import React, { useEffect, useState } from 'react'

export const TestCounter = () => {

    const [countState, setCount] = useState(0);

    useEffect(() => {
        document.title = `You've clicked ${countState} times`
        return () => {
            console.log('Unmounted')
        }
    }, [countState]);

    const _handleClick = () => {
        setCount(countState + 1);
    }

    return (
        <>
            <button className="btn btn-primary" onClick={_handleClick}>Click me!</button>
        </>
    );
}
