import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Seco.css';


const Seco = () => {
    const [Blogs, setBlogs] = useState("");
useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`https://blogmern-xi.vercel.app/blog/getrecentblogs`);
                setBlogs(response.data.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                alert("Some error occurred while fetching blogs");
            }
        }
        fetchBlogs();
    }, []);

    return (
        <div className="seco-container">
            <ListGroup defaultActiveKey="#link1">
                {Blogs && Blogs.map((item, index) => (
                    <div key={index} className="blog-item">
                        <ListGroup.Item action href={`#link${index}`} variant="light">
                            <Link to={`/singleblogpage/${item._id}`} className="blog-link">
                                <h1 className="blog-title">{item.title}</h1>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <p className="blog-desc">{item.desc}</p>
                        </ListGroup.Item>
                    </div>
                ))}
            </ListGroup>
        </div>
    );
}

export default Seco;

