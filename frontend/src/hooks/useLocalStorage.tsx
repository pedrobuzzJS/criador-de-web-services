import { useState, useEffect } from "react";

interface LocalStorage {
    key: string,
    value: string
}

export function useLocalStorage({key, value}: LocalStorage) {
    const [ state, setState ] = useState(() => {
        const local = window.localStorage.getItem(key);
        return local ? local : value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, value);
    }, [value, key]);

    return [state, setState ];
}