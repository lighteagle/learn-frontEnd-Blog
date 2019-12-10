import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState({
    title: "",
    content: ""
  });

  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URI}/users-posts`)
      .then(result => {
        console.log(result);
        setPosts(result.data.result);
      })
      .catch(error => setError(error.message));
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // token from login
    const decoded = jwt.decode(localStorage.getItem("token"));

    //create FormData
    const fd = new FormData();
    fd.append("imagePost", file);
    fd.append("title", post.title);
    fd.append("content", post.content);
    fd.append("userId", decoded.user.id);

    // add title, content, userId
    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/users-posts`, fd)
      .then(result => console.log(result))
      .catch(error => setError(error.message));
  };

  const handleFile = event => {
    console.log(event.target.files);
  };

  return (
    <div>
      <h3>DASHBOARD PAGE</h3>

      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={posts.title}
        />
        <label htmlFor="content">Content</label>
        <textarea
          type="text"
          cols="30"
          rows="10"
          name="content"
          onChange={handleChange}
          value={posts.content}
        />

        <input type="file" onChange={handleFile} />

        <button onClick={handleSubmit}> Add New Post</button>
      </form>
      <div id="posts">POST LIST</div>
    </div>
  );
}

export default Dashboard;
