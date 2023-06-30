import React, { useState } from "react";
import "../styles/Blogitem.css";
import editBtn from "../assets/images/edit.svg";
import deleteBtn from "../assets/images/delete.svg";

function BlogItem({ id, title, author, date, content, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited blog with updated title and content
    const updatedBlog = {
      id,
      title: editedTitle,
      author,
      date,
      content: editedContent,
    };
    setIsEditing(false);
    onEdit(updatedBlog);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(title);
    setEditedContent(content);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="blog-item">
      <div className="blog-header">
        <div className="heading">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              ></textarea>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="blog-detail">
          <p className="blog-author">{author}</p>
          <p className="blog-date">{date}</p>
        </div>
      </div>
      <p className="blog-content">{content}</p>
      {isEditing && (
        <div className="edit-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default BlogItem;
