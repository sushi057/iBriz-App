import React from "react";
import "../styles/Blogitem.css";
import editBtn from "../assets/images/edit.svg";
import deleteBtn from "../assets/images/delete.svg";

function BlogItem({ id, title, author, date, content, onEdit, onDelete }) {
  function handleEdit() {
    onEdit(id);
  }
  function handleDelete() {
    onDelete(id);
  }
  
  return (
    <div className="blog-item">
      <div className="blog-header">
        <div className="heading">
          <h2 className="blog-title">{title}</h2>
          <div className="heading-icons">
            <img
              src={editBtn}
              className="blog-icons"
              alt="edit button"
              onClick={handleEdit}
            />
            <img
              src={deleteBtn}
              className="blog-icons"
              alt="delete button"
              onClick={handleDelete}
            />
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
