import React from 'react'
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('json/blogs.json')
        .then(res => res.json())
        .then(data => {
          setBlogs(data)
        })
    }, [])

  return (
    <>
    <h1>Ale's amazing blog</h1>
    <hr/>
    <ul>{blogs.map((blog)=>
      <div key={blog.id}>
        <h2><li><Link to={`/${blog.id}`}>{blog.title}</Link></li></h2>
        <p>Created by 🙍🏻‍♀️<b>{blog.creator}</b> on <b>{blog.creation_date}</b></p>
      </div>)}
    </ul>
    <Outlet/>  
    </>
  )
}

export default Home