import React, { useState } from "react";
import Blog from "../assets/images/Blog.png";
import "../styles/header.css";

export default function Header({ onAddBlog }) {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleAddBlog = () => {
    setIsAdding(true);
  };

  const handleSaveBlog = () => {
    const newBlog = {
      title,
      author,
      content,
    };
    onAddBlog(newBlog);
    setIsAdding(false);
    setTitle("");
    setAuthor("");
    setContent("");
  };

  const handleCancel = () => {
    setIsAdding(false);
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <div className="header">
      <div className="left">
        <img src={Blog} alt="blog logo" id="logo" />
      </div>
      <div className="right">
        {isAdding ? (
          <div className="add-blog-form">
            <input
              type="text"
              placeholder="Heading"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className="form-buttons">
              <button onClick={handleSaveBlog}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <p className="btn-text">Add new article</p>
            <p className="add-btn" onClick={handleAddBlog}>
              +
            </p>
          </>
        )}
      </div>
    </div>
  );
}
