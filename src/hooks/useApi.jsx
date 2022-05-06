import React, { useEffect, useState } from "react";

export const useApi = (handlerData) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    
    useEffect(() => {
        setLoading(true);
        handlerData()
            .then(result => setData(result))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [handlerData]);

    return { data, loading, error }
}
