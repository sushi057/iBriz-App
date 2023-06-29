import React from "react";
import "../styles/Blogitem.css";
import editBtn from "../assets/images/git.svg";
import deleteBtn from "../assets/images/git.svg";

function BlogItem({ title, author, date, content, onClick }) {
  return (
    <div className="blog-item" onClick={onClick}>
      <div className="blog-header">
        <div className="heading">
          <h2 className="blog-title">{title}</h2>
          <div className="heading-icons">
            <img src={editBtn} className="blog-icons" alt="edit button" />
            <img src={deleteBtn} className="blog-icons" alt="delete button" />
          </div>
        </div>
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
