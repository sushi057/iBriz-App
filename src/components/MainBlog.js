import React, { useState } from "react";
import illustration from "../assets/images/illustration.svg";
import "../styles/mainblog.css";
import BlogItem from "./BlogItem";
import articles from "../assets/articles";

function MainBlog() {
  return (
    <div className="main-blog">
      <div className="blog-list">
        {articles.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            content={blog.content}
            onClick={() => {}}
          />
        ))}
      </div>
      <div className="illustration">
        <img src={illustration} alt="man reading book" />
      </div>
    </div>
  );
}

export default MainBlog;
