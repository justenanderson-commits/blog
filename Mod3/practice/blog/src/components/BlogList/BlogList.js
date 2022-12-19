import React from 'react'


const BlogList = ({ blog, handleDelete }) => {
  // console.log("Blog: ", blog )

  return (
    <div className="blog-list">
      <div className="blog-preview" key={ blog.id }>
        <h2>{ blog.title }</h2>
        <p>Written by { blog.author }</p>
        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
      </div>
    </div>
  )
}

export default BlogList