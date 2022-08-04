import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogPage = () => {
    let idPage = useParams().id
    const [blog, setBlog] = useState([]);
    useEffect(()=>{
        fetch('json/blogs.json')
        .then(res => res.json())
        .then(data => {
          setBlog(data[idPage])
        })
    }, [idPage])
  return (
    <>
    <h1>{blog.title}</h1>
    <p>{blog.content}</p>
    <Link to={"/"}><button>👈 Back</button></Link>
    </>
  )
}

export default BlogPage