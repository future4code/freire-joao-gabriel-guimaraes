import axios from 'axios'
import { useEffect, useState } from 'react';

export const useRequestData = (url) => {
    const [data1, setData1] = useState([])
    const [isloading, setIsLoading] = useState(false)
const getData = () => {
    setIsLoading(true)
    axios
        .get(url)
        .then((res) => {
            setData1(res.data)
            console.log(res)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false)
        });
    
}   
useEffect(() => {
    getData()
}, [url])
    return [data1, isloading]
};