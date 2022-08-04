import React from 'react'
import Blogs from './blogs.json'
import { Link, useParams } from 'react-router-dom';

const BlogPage = () => {
    let id = useParams().id
  return (
    <>
    <h1>{Blogs[id].title}</h1>
    <p>{Blogs[id].content}</p>
    <Link to={"/home"}><button>👈 Back</button></Link>
    </>
  )
}

export default BlogPage