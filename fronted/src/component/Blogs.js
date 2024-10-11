import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Blogs.css';
const Blogs = () => {
  const [Blogs, setBlogs] = useState("");

  useEffect(() => {
      const fetchBlogs = async () => {
          try {
              const response = await axios.get(`https://blogmern-xi.vercel.app/blog/getallblog`);
              setBlogs(response.data.data);
          } catch (error) {
              alert("Error fetching blogs");
              console.error("Error fetching blogs:", error);
          }
      }
      fetchBlogs();
  }, []);

  return (
      <div className="blogs-container">
          <h1>All Blogs</h1>
          {Blogs && Blogs.map((item, index) => (
              <div key={index} className="blog-item">
                  <Link to={`/singleblogpage/${item._id}`} className="blog-title-link">
                      <h2 className="blog-title">{item.title}</h2>
                  </Link>
                  <p className="blog-desc">{item.desc}</p>
              </div>
          ))}
      </div>
  );
}

export default Blogs;
