import React from "react";
import Blog from "../assets/images/Blog.png";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <img src={Blog} alt="blog logo" id="logo" />
      </div>
      <div className="right">
        <p className="btn-text">Add new article</p>
        <p className="add-btn">+</p>
      </div>
    </div>
  );
}
