import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams} from 'react-router-dom'
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import {Loader} from '../components/Loader'
import {NewsCard} from '../components/NewsCard'

export const DetailPage = () => {
    const {accessToken} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [news, setNews] = useState(null)
    // const linkId = useParams().id

    const getLink = useCallback(async  () => {
        try {
            const fetched = await request('/api1/news/get', 'GET', null, {
                Authorization: `Bearer ${accessToken}`
            })
            setNews(fetched)
        } catch (e) {}
    }, [accessToken, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }

    return (
        <>
           { !loading && news && <NewsCard news={news} />}
        </>
    )
}
