import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })

    const { x, y } = coords;


    useEffect(() => {

        const mouseMove = (e) => {
            let coords = { x: e.x, y: e.y };
            setCoords(coords);
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log("Component demounted");
        }
    }, [])

    return (
        <>
            <h3>You're great!</h3>
            <p>x: {x} y: {y}</p>
        </>
    )
}
