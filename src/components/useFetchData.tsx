import { useState, useEffect } from 'react';

interface UseFetchDataProps<T> {
    endpoint: string;
}

const useFetchData = <T,>({ endpoint }: UseFetchDataProps<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/${endpoint}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: T = await response.json();
                setData(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetchData;
