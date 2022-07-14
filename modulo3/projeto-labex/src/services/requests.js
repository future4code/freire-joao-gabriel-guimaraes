import { useState, useEffect } from 'react'
import axios from 'axios'

export function useRequestData(url) {
    
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const getData = () => {
        setIsLoading(true)
    axios
        .get(url, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => {
        setData(response.data)
        setIsLoading(false)
       })
        .catch((err) => {
        setError(err)
        setIsLoading(false)
       })
    }

    useEffect(() => {
    getData()
    }, [url]) 
        return [data, isLoading, error, getData] 
}


export function useDeleteData(url) {
    
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
    setIsLoading(true)
    axios
        .delete(url)
        .then((response) => {
        setData(response.data)
        setIsLoading(false)
       })
        .catch((err) => {
        setError(err)
        setIsLoading(false)
       })
    }, [url]) 
        return [data, isLoading, error] 
}
export function decideData(url, decision,getData) {
    
    const body = {
        approve: decision
    }
    axios
        .put(url, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => {
        console.log(response.data)  
        alert('decisão registrada!')
        getData()
       
       })
        .catch((err) => {
        alert(err.message)
       })
    
}