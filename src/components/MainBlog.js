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
    const updatedBlogList = blogList.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    );
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateBlog(selectedBlog);
            }}
          >
            <input
              type="text"
              value={selectedBlog.title}
              onChange={(e) =>
                setSelectedBlog({
                  ...selectedBlog,
                  title: e.target.value,
                })
              }
            />
            <textarea
              value={selectedBlog.content}
              onChange={(e) =>
                setSelectedBlog({
                  ...selectedBlog,
                  content: e.target.value,
                })
              }
            ></textarea>
            <button type="submit">Update</button>
          </form>
        </div>
      )}
      <div className="illustration">
        <img src={illustration} alt="man reading book" />
      </div>
    </div>
  );
}

export default MainBlog;
