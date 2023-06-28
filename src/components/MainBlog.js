import React, { useState } from "react";
import "../styles/mainblog.css";
import articles from "../assets/articles";

function MainBlog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="main-blog">
      <div className="blog-list">
        {articles.map((article) => (
          <div
            key={article.id}
            className="blog-item"
            onClick={() => handleArticleClick(article)}
          >
            <h2 className="blog-title">{article.title}</h2>
            <p className="blog-content">{article.content}</p>
          </div>
        ))}
      </div>
      {selectedArticle && (
        <div className="full-blog">
          <h2 className="blog-title">{selectedArticle.title}</h2>
          <p className="blog-content">{selectedArticle.content}</p>
        </div>
      )}
    </div>
  );
}

export default MainBlog;
