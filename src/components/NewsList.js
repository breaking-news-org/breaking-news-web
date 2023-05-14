import React from 'react'
// import {NewsCard} from './NewsCard'
import './newlist.css'

export const NewsList = ({ newslist }) => {
  if (!newslist.length) {
    return <p className="center">No news yet</p>
  }

  return (
    <section className='hero'>
      <div className='container'>
      {newslist.map((item) => {
        return (
          <>
            <div className='box'>
              <div className='left box-child'>
                <div className="img">
                  <img src={item.images[0]} alt="" />
                  <div className="text bottom-right">
                    <span className="title">{item.title}</span>      
                    <div className="author">
                      <span>by {item.authorName}</span>
                      <span>{item.createdAt.slice(0, 10)}</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className='right box-child'>
                <p className='bottom-right'>{item.text}</p>
              </div>
            </div>
            {/* <NewsCard key={item.id} news={item} /> */}
          </>
        )
      })}
      </div>
    </section>
  )
}