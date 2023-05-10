import {useState, useCallback} from 'react'
import axios from 'axios'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'POST', body = null, headers= {}) => {
        setLoading(true)
        // body = JSON.stringify(body)
        const req_inst = axios.create();
        req_inst.interceptors.request.use(
            function (config) {
                config.headers['Content-Type'] = 'application/json;charset=utf-8';
                config.data = body;
                config.method = "POST";
                return config;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
        try {
            const response = await req_inst({
                method, 
                url, 
                body,
                headers: {
                    ...headers,
                    "Content-Type": 'application/json;charset=utf-8',
                    "Accept": 'application/json;charset=utf-8',
                },
            })
            const data = response.data
            
            if (response.status !== 200 && response.status !== 201) {
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
