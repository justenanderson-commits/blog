import React, { useState } from 'react'
import './Home.css'

const Home = () => {
  const [blogs, setBlog] = useState([
    {title: "Title One", body: "Blog Body", author: "Human Person1", id: 1},
    {title: "Title Two", body: "Blog Body", author: "Human Person2", id: 2},
    {title: "Title Three", body: "Blog Body", author: "Human Person3", id: 3}
  ])

  const displayBlogs = blogs.map(blog => {
    return (
      <div className="blog-preview" key={ blog.id }>
        <h2>{ blog.title }</h2>
        <p>Written by { blog.author }</p>
        
      </div>
    )
  })

  return (
    <div className="home">
      { displayBlogs }
    </div>
  )
}

export default Home