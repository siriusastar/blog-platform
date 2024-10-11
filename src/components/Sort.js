import React from 'react';

const Sort = ({ sortBy, handleSort }) => {
  return (
    <div className="mb-3">
      <label htmlFor="sortBy" className="form-label">Sort by: </label>
      <select id="sortBy" value={sortBy} onChange={handleSort} className="form-select">
        <option value="title">Title</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default Sort;
