import React from 'react';

const ArticleCard = ({ article, toggleBookmark, isBookmarked }) => {
  return (
    <div className="card h-100">
      <img src={article.imageUrl || "https://via.placeholder.com/300"} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <div className="tags mb-2">
          {article.tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary me-1">{tag}</span>
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => toggleBookmark(article.id)}>
          {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
        </button>
      </div>
      <div className="card-footer">
        <small className="text-muted">{new Date(article.date).toLocaleDateString()}</small>
      </div>
    </div>
  );
};

export default ArticleCard;
