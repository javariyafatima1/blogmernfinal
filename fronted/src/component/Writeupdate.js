import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import './Write.css';

const Writeupdate = ({ titlename }) => {
  const navigate = useNavigate();
  const [Blog, setBlog] = useState({
      title: "",
      desc: ""
  });
  const id = useParams().id;

  useEffect(() => {
      const fetchBlog = async () => {
          try {
              const response = await axios.get(`https://blogmern-xi.vercel.app/blog/getblogs/${id}`);
              setBlog(response.data.data);
          } catch (error) {
              console.error("Error fetching blog:", error);
          }
      }
      fetchBlog();
  }, [id]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setBlog({ ...Blog, [name]: value });
  }

  const handleSubmit = async () => {
      try {
          if (titlename === "Create Blog") {
              await axios.post(`https://blogmern-xi.vercel.app/blog/create`, Blog);
              alert("Blog created successfully!");
          } else {
              await axios.put(`https://blogmern-xi.vercel.app/blog/updateblog/${id}`, Blog);
              alert("Blog updated successfully!");
              navigate(`/singleblogpage/${id}`);
          }
          setBlog({ title: "", desc: "" });
      } catch (error) {
          console.error("Error submitting blog:", error);
          alert("Error submitting blog");
      }
  }

  return (
      <div className="write-update-container">
          <h2>{titlename}</h2>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                      type="text"
                      name="title"
                      value={Blog.title}
                      onChange={handleChange}
                      placeholder="Enter title"
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                      as="textarea"
                      name="desc"
                      value={Blog.desc}
                      onChange={handleChange}
                      placeholder="Enter description"
                      rows={3}
                  />
              </Form.Group>
              <Button variant="primary" onClick={handleSubmit}>{titlename}</Button>
          </Form>
      </div>
  );
}

export default Writeupdate;