import { useEffect, useState } from "react";

export function useLocalStorageState(initialState: unknown, key: string) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null && storedValue !== "undefined"
            ? JSON.parse(storedValue)
            : initialState;
    });

    useEffect(
        function () {
            localStorage.setItem(key, JSON.stringify(value));
        },
        [key, value]
    );

    return [value, setValue];
}
