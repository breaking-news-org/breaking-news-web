import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'POST', body = null, headers= {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json;charset=utf-8'
                headers['Accept'] = 'application/json;charset=utf-8'
            }
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                // left == message
                throw new Error(data.Left || 'Smth went wrong')
            }
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            // left == message
            setError(e.Left)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}
