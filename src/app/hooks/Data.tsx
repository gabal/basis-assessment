import { useEffect, useState } from "react";
import { get } from "../utils/api";

interface UseDataApiResult {
    data?: any;
    isLoading: boolean;
    error: any;
}

export const useDataApi = (url: string): UseDataApiResult => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            setError(undefined);
            setIsLoading(true);
            try {
                const result = await get(url);
                setData(result);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, isLoading, error };
}