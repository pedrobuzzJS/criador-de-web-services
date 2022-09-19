import { useState, useEffect } from "react";
interface SessionStorage {
    key: string,
    value: string
};

export function useLocalStorage({key, value}: SessionStorage) {
    const [ state, setState ] = useState(() => {
        const local = window.sessionStorage.getItem(key);
        return local ? local : value;
    });

    useEffect(() => {
        window.sessionStorage.setItem(key, value);
    }, [value, key]);

    return [state, setState ];
};