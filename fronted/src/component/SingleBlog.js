import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './Single.css';
const SingleBlog = () => {
    const [Blogs, setBlogs] = useState("");
    const id = useParams().id;

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://blogmern-xi.vercel.app/blog/getblogs/${id}`);
                setBlogs(response.data.data);
            } catch (error) {
                console.error("Error fetching blog:", error);
                alert("Some error occurred while fetching blog");
            }
        }
        fetchBlog();
    }, [id]);

    return (
        <div className="single-blog-container">
            <Link to={`/updateblogpage/${Blogs._id}`} className="edit-blog-link">
                <button className="edit-blog-btn">Edit Blog</button>
            </Link>
            {Blogs && (
                <>
                    <h1 className="blog-title">{Blogs.title}</h1>
                    <p className="blog-desc">{Blogs.desc}</p>
                </>
            )}
        </div>
    );
}

export default SingleBlog;


