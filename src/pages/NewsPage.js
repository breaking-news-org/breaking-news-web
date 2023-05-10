import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {NewsList} from '../components/NewsList'

export const NewsPage = () => {
  const [newslist, setNewsList] = useState([])
  const {loading, request} = useHttp()
  const {accessToken} = useContext(AuthContext)

  const fetchNews = useCallback(async () => {
    try {
      const fetched = await request('/api1/news/get', 'GET', null, {
        Authorization: `Bearer ${accessToken}`
      })
      setNewsList(fetched)
    } catch (e) {}
  }, [accessToken, request])

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <NewsList newslist={newslist} />}
    </>
  )
}
