import React from 'react'

export const NewsCard = ({item: {news}}) => {
  return (
    <>
    <div className='box'>
      <div className="img">
        <img src={news.images[0]} alt="" />
      </div>
      <div className="text">
        <span className="title">{news.title}</span>
        <span className="category">{news.category}</span>        
        <div className="author">
          <span>by {news.authorName}</span>
          <span>{news.createdAt}</span>
        </div>
        <span className="text">{news.text}</span>
      </div>
    </div>
    </>
  )
}
