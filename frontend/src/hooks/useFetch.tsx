import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [ data, setData ] = useState<T | null>();
    const [ isFetching, setIsFetching ] = useState<Boolean>(true);
    const [ error, setError] = useState<Error | null>(null);

    useEffect( () => {
        setIsFetching(true);
        api.get(url)
        .then( response => {
            setData(response.data.data);
        } )
        .catch( erro => {
            setError(erro);
        } )
        .finally( () => {
            setIsFetching(false);
        })
    }, [url] )

    return { data, error, isFetching };
}