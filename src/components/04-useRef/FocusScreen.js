import React, { useRef } from 'react'
import '../02-useEffect/effects.css'
export const FocusScreen = () => {

    const ref = useRef();

    const _handleClick = () => {
        ref.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />
            <input
                ref={ref}
                className="form-control"
                placeholder="Name"
            />
            <button

                className="btn btn-outline-primary mt-5"
                onClick={_handleClick}
            >
                Focus
            </button>
        </div>
    )
}
