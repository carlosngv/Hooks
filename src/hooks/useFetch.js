import React, { useEffect, useLayoutEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        fetch(url)
            .then(data => data.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data
                });
            });
    }, [url]);

    return state;

}
