import React from 'react'

const Card = ({item: {id, cover, category, title, author, time}}) => {
  return (
    <>
    <div className='box'>
      <div className="img">
        <img src={cover} alt="" />
      </div>
      <div className="text">
        <span className="category">{category}</span>
        {/* <Link to={`/SinglePage/${id}`}>
          <h1 className="titleBg">{title}</h1>
        </Link> */}
        <div className="author">
          <span>by {author}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card