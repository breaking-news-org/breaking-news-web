import React from 'react'
import {Link} from 'react-router-dom'

export const NewsList = ({ newslist }) => {
  if (!newslist.length) {
    return <p className="center">No news yet</p>
  }

  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Title</th>
        <th>Category</th>
        <th>Open</th>
      </tr>
      </thead>

      <tbody>
      { newslist.map((post, index) => {
        return (
          <tr key={post._id}>
            <td>{index + 1}</td>
            <td>{post.title}</td>
            <td>{post.category}</td>
            <td>
              <Link to={`/detail/${post._id}`}>Open</Link>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}