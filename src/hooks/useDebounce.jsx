import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {

    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(handler) // handler를 중복 실행 되지 않게 함
        }
    }, [value, delay])
    
    return debounceValue
}

export default useDebounce