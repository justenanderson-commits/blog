import React from 'react'


const BlogList = ({ blog }) => {
  console.log("Blog: ", blog )


  return (
    <div className="blog-list">
      <div className="blog-preview" key={ blog.id }>
        <h2>{ blog.title }</h2>
        <p>Written by { blog.author }</p>
      </div>
    </div>
  )
}

export default BlogList