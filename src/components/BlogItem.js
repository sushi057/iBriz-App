import React from "react";
import "../styles/Blogitem.css";

function BlogItem({ title, content, onClick }) {
  return (
    <div className="blog-item" onClick={onClick}>
      <h2 className="blog-title">{title}</h2>
      <p className="blog-content">{content}</p>
    </div>
  );
}

export default BlogItem;
