import React from 'react';
import '../styles/SearchBar.css';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-container">
      <div className="search-inputs">
        <div className="search-input location">
          <label>LOCATION</label>
          <input type="text" placeholder="Where would you like to go?" />
        </div>
        
        <div className="search-input check-in">
          <label>CHECK IN</label>
          <input type="text" placeholder="Add date" />
        </div>
        
        <div className="search-input check-out">
          <label>CHECK OUT</label>
          <input type="text" placeholder="Add date" />
        </div>
        
        <div className="search-input guests">
          <label>GUESTS</label>
          <input type="text" placeholder="1 Room, 2 Guests" />
        </div>
        
        <div className="search-input agent-id">
          <label>AGENT ID/IATA</label>
          <input type="text" placeholder="AGENT ID/IATA" />
        </div>
      </div>
      
      <button className="search-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;