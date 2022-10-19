import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../global/context/useContext.js';

export const useRequestData = (url) => {
    const [data1, setData1] = useState([])
    const [isloading, setIsLoading] = useState(false)
    const { setData } = useContext(GlobalContext)
const getData = () => {
    setIsLoading(true)
    axios
        .get(url)
        .then((res) => {
            setData(res.data)
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
    return [data1, isloading, getData]
};

export const GetData1 = (url, setUser) => {
    axios.get(url)
    .then((res) => {
        setUser(res.data)
        console.log(res)
    })
    .catch((err) => {
        console.log(err);
    });
}