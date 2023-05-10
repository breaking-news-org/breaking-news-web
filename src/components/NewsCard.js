import React from "react";

export const NewsCard = ({news}) => {
    return (
        <>
            <h2>{news.text}</h2>
            <p>{news.category}</p>
            <p>{news.images[0]}</p>
            <p>{news.isPublished}</p>
        </>
    )
}