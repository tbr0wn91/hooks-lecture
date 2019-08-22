import {useState, useEffect } from 'react'
import axios from 'axios';

export default function useFetch(url){
    const [ data, setData] = useState()

    const fetchData = async (id) => {
        const response = await axios.get(`${url}/${id}`)
        setData(response.data)
        console.log(response.data)
    }


    useEffect( () => {
        fetchData(260)
    }, [])

    return { data, fetchData }
}