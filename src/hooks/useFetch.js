import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const ref = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            ref.current = false; // función que se ejecuta cuando se desmonta el componente
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        fetch(url)
            .then(data => data.json())
            .then(data => {

                if (ref.current) { // referencia que indica que aún está montado el componente
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            });
    }, [url]);

    return state;

}
