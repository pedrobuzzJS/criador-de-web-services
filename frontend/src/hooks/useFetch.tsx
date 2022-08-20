// import { AxiosRequestConfig } from "axios";
// import { useEffect, useState } from "react";
// import api from "../services/api";

// export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
//     const [ data, setData ] = useState<T | null>();
//     const [ isFetching, setLoadding ] = useState<Boolean>(true);
//     const [ error, setError] = useState<Error | null>(null);

//     useEffect( () => {
//         console.log('chamando');
//         setLoadding(true);
//         api.get(url)
//         .then( response => {
//             setData(response.data?.data);
//         } )
//         .catch( erro => {
//             setError(erro);
//         } )
//         .finally( () => {
//             setLoadding(false);
//         })
//     }, [url] )

//     return { data, error, isFetching };
// }

import React, { useState, useEffect, useCallback } from "react";
import api from "../services/api";
import { AxiosRequestConfig } from "axios";

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [ data, setData ] = useState<T | null>();
    const [ status, setStatus ] = useState<number | null>(null);
    const [ error, setError ] = useState<Error | null>(null);
    const [ loadding, setLoadding ] = useState(false);

    const fetch = useCallback( async () => {
        await setError(null);
        await setLoadding(true);
        await api.get(url)
        .then( response => {
            const { data, status } = response;
            setData(data);
            setStatus(status)
        } )
        .catch( erro => {
            setError(erro);
        } )
        .finally( () => {
            setLoadding(false);
        })
    }, [url] );

    useEffect(() => {
        fetch();
      }, [fetch]);

    return {
        data,
        status,
        error,
        loadding,
    };
}