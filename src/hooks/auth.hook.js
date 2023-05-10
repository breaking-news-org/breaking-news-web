import {useState, useCallback, useEffect} from 'react'


const storageName = 'userData'

export const useAuth = () => {
    const [refreshToken, setRefreshToken] = useState(null)
    const [accessToken, setAccessToken] = useState(null)

    const login = useCallback((ref_token, acc_token) => {
        setRefreshToken(ref_token)
        setAccessToken(acc_token)
    
        localStorage.setItem(storageName, JSON.stringify({
            refreshToken: ref_token, accessToken: acc_token
        }))
      }, [])
    
    const logout = useCallback(() => {
        setRefreshToken(null)
        setAccessToken(null)

        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.refreshToken) {
            login(data.refreshToken, data.accessToken)
        }
    }, [login])

    return {login, logout, refreshToken, accessToken}
}
