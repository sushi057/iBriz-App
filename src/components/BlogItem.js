import React from "react";
import "../styles/Blogitem.css";

function BlogItem({ title, author, date, content, onClick }) {
  return (
    <div className="blog-item" onClick={onClick}>
      <div className="heading">
        <h2 className="blog-title">{title}</h2>
        <div className="blog-detail">
          <p className="blog-author">{author}</p>
          <p className="blog-date">{date}</p>
        </div>
      </div>
      <p className="blog-content">{content}</p>
    </div>
  );
}

export default BlogItem;
