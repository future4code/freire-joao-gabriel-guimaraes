import axios from 'axios'
import { useEffect, useState } from 'react';

export const useRequestData =  (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const getData = () => {
        setIsLoading(true)
        axios
            .get(url)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false)
                setError(err.message)
            });
        
    };
    useEffect(() => {
        getData()
    }, [url])

    return [data, isLoading, error, getData]
}
 

