import React, { useState } from 'react';

const CreateArticle = ({ addArticle }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now(),
      title,
      description,
      tags: tags.split(',').map(tag => tag.trim()),
      date: new Date(),
    };
    addArticle(newArticle);
    setTitle('');
    setDescription('');
    setTags('');
  };

  return (
    <div className="create-article mb-4">
      <h1>Create a new article</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article Title"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your content here..."
            required
            className="form-control"
            rows="5"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags (comma separated)"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default CreateArticle;
