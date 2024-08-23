"use client"
import React, { useEffect, useState } from 'react'

const useFetchpro = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok) return res.json()
                return Promise.reject()
            })
            .then(mydata=>setData(mydata))
    }, [url])
    return data
}
export default useFetchpro
