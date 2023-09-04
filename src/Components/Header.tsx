import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function Header() {
  const [button, setButton] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { setFilter } = useContext(RecipesContext);

  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/profile');
  };

  const toggleSearch = () => {
    setButton(!button);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setFilter({ type: 'name', value: searchValue });
  };

  return (
    <div>
      <button onClick={ handleButton }>
        <img
          src="src/images/profileIcon.svg"
          alt="Profile"
          data-testid="profile-top-btn"
        />
      </button>
      <button data-testid="btnLupa" onClick={ toggleSearch }>
        <img
          src="src/images/searchIcon.svg"
          alt="Search"
          placeholder="Search"
          data-testid="search-top-btn"
        />
      </button>
      {button ? (
        <div>
          <input
            onChange={ handleSearchInput }
            data-testid="search-input"
            type="text"
            placeholder="Search..."
            value={ searchValue }
            id="header-search-input"
          />
        </div>
      ) : null}
    </div>
  );
}

export default Header;
