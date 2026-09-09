import React from 'react';

export const SearchModal: React.FC = () => {
  return (
    <div className="popup-search-box d-none d-lg-block">
      <button className="searchClose">
        <i className="fal fa-times"></i>
      </button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="What are you looking for?" />
        <button type="submit">
          <i className="fal fa-search"></i>
        </button>
      </form>
    </div>
  );
};
