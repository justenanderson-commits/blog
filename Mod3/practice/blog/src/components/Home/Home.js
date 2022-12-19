import React, { useState, useEffect } from 'react'
import './Home.css'
import BlogList from '../BlogList/BlogList'

const Home = () => {
  const [blogs, setBlog] = useState([
    {title: "Title One", body: "Blog Body", author: "Human Person1", id: 1},
    {title: "Title Two", body: "Blog Body", author: "Human Person2", id: 2},
    {title: "Title Three", body: "Blog Body", author: "Human Person1", id: 3}
  ])

  const title = "All Blogs!"
  const key = Date.now()
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlog(newBlogs)
  }

  // useEffect fires after EVERY render, unless we pass in the empty array (like reduce's initial value)
  // Add dependencies into that array will determine when the useEffect function should run

  useEffect(() => {
    console.log('useEffect ran')
  }, [])

  const displayBlogs = blogs.map(blog => {
    return (
      <div className='blog-list-display' >
        <BlogList blog={ blog } handleDelete={ handleDelete }/>
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