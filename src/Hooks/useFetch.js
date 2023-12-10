import React, { useState, useEffect } from 'react';
import { makeRequest } from '../makeRequest';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetch_api_data = async () => {
            try {
                setLoading(true);
                // const requestInstance = makeRequest();
                const res = await makeRequest().get(url);
                setData(res.data.data);
            } catch (error) {
                console.log(`${error}`);
                setError(true);
            }
            setLoading(false);
        };
        fetch_api_data();
    }, [url]);

    return { data, loading, error }; // Return the object with data, loading, and error
};

export default useFetch;
