import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ArticleFeed from './components/ArticleFeed';
import CreateArticle from './components/CreateArticle';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [sortBy, setSortBy] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Fetch articles on component mount
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const articlesWithImages = data.map((article, index) => ({
          id: article.id,
          title: article.title,
          description: article.body,
          tags: ['News', 'Tech'], // You can modify this as needed
          imageUrl: `https://picsum.photos/300/200?random=${index + 1}`, // Random image from Lorem Picsum
          date: new Date().toISOString(),
        }));

        setArticles(articlesWithImages);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const toggleBookmark = (id) => {
    setBookmarks(prevBookmarks => 
      prevBookmarks.includes(id) 
        ? prevBookmarks.filter(bookmark => bookmark !== id) 
        : [...prevBookmarks, id]
    );
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
    // Sort articles based on the selected criteria
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate current articles for pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <h1>Your Bookmarks</h1>
        <ArticleFeed articles={currentArticles.filter(article => bookmarks.includes(article.id))} toggleBookmark={toggleBookmark} bookmarks={bookmarks} />
        <h1>All Articles</h1>
        <Sort sortBy={sortBy} handleSort={handleSort} />
        <ArticleFeed articles={currentArticles} toggleBookmark={toggleBookmark} bookmarks={bookmarks} />
        <Pagination
          totalArticles={articles.length}
          articlesPerPage={articlesPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
        <CreateArticle addArticle={(newArticle) => {
          setArticles([...articles, newArticle]);
        }} />
      </div>
    </div>
  );
};

export default App;
