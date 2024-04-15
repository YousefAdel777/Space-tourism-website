import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setIsLoading(false);
                setData(data);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
                setIsError(true);
            }
        }
        getData();
    }, [url]);
    return {isError, isLoading, data};
}

export default useFetch;