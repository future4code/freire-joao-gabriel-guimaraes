
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function useRequestData(url) {
    
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
    setIsLoading(true)
    axios
        .get(url)
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

export function useEditData(url) {
    
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
    setIsLoading(true)
    axios
        .post(url)
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
export function useDecideData(url) {
    
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
    setIsLoading(true)
    axios
        .put(url)
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