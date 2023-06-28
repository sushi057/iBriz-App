import React from "react";
import Blog from "../assets/Blog.png";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <img src={Blog} alt="blog logo" id="logo" />
      </div>
      <div className="right">
        <p className="add-btn">+</p>
      </div>
    </div>
  );
}
