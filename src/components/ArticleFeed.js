import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleFeed = ({ articles, toggleBookmark, bookmarks }) => {
  return (
    <div className="row">
      {articles.length > 0 ? (
        articles.map((article) => (
          <div className="col-md-4 mb-4" key={article.id}>
            <ArticleCard
              article={article}
              toggleBookmark={toggleBookmark}
              isBookmarked={bookmarks.includes(article.id)}
            />
          </div>
        ))
      ) : (
        <div className="col-12">
          <p>No articles available.</p>
        </div>
      )}
    </div>
  );
};

export default ArticleFeed;
