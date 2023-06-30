import React, { useState } from "react";
import illustration from "../assets/images/illustration.svg";
import "../styles/mainblog.css";
import BlogItem from "./BlogItem";
import articles from "../assets/articles";

function MainBlog() {
  const [blogList, setBlogList] = useState(articles);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleEdit = (id) => {
    const selectedBlogItem = blogList.find((blog) => blog.id === id);
    setSelectedBlog(selectedBlogItem);
  };

  const handleDelete = (id) => {
    const updatedBlogList = blogList.filter((blog) => blog.id !== id);
    setBlogList(updatedBlogList);
  };

  const handleUpdateBlog = (updatedBlog) => {
    const updatedBlogList = blogList.map((blog) => {
      if (blog.id === updatedBlog.id) {
        return updatedBlog;
      }
      return blog;
    });
    setBlogList(updatedBlogList);
    setSelectedBlog(null);
  };

  return (
    <div className="main-blog">
      <div className="blog-list">
        {blogList.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            content={blog.content}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {selectedBlog && (
        <div className="edit-blog">
          <h2>Edit Blog</h2>
          {/* Render form or component for editing the blog */}
          {/* Pass selectedBlog and handleUpdateBlog as props */}
        </div>
      )}
      <div className="illustration">
        <img src={illustration} alt="man reading book" />
      </div>
    </div>
  );
}

export default MainBlog;
