import {useEffect, useState} from 'react';

export const useSetup = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setInitialized(true);
    }, []);

    return initialized;
};
