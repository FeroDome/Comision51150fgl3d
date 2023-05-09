import { useState, useEffect } from 'react'

export const useAsync = (asyncFunction, dependecies = []) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    if(!Array.isArray(dependecies)) {
        console.error('No se pasaron correctamente las dependencias')
        dependecies = []
    }

    useEffect(() => {
        setLoading(true)

        asyncFunction()
            .then(data => {
                setData(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [...dependecies]) 

    return {
        data,
        error,
        loading
    }
}