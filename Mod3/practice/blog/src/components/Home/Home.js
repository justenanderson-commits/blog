import React, { useState } from 'react'
import './Home.css'
import BlogList from '../BlogList/BlogList'

const Home = () => {
  const [blogs, setBlog] = useState([
    {title: "Title One", body: "Blog Body", author: "Human Person1", id: 1},
    {title: "Title Two", body: "Blog Body", author: "Human Person2", id: 2},
    {title: "Title Three", body: "Blog Body", author: "Human Person1", id: 3}
  ])

  const title = "All Blogs!"
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlog(newBlogs)
  }

  const displayBlogs = blogs.map(blog => {
    return (
      <div className='Home'>
        <BlogList blog={ blog } handleDelete={ handleDelete } />
      </div>
    )
  })
  
  return (
    <div className="home">
      <h2>{ title }</h2>
      { displayBlogs }
    </div>
  )
}

export default Home