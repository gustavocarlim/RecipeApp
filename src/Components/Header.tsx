import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function Header() {
  const [button, setButton] = useState(false);
  const { filter, setFilter } = useContext(RecipesContext);

  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/profile');
  };

  const toggleSearch = () => {
    setButton(!button);
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
      <button onClick={ toggleSearch }>
        <img
          src="src/images/searchIcon.svg"
          alt="Search"
          placeholder="Search"
          data-testid="search-top-btn"
        />
      </button>
      {button ? <input
        onChange={ (e) => setFilter(e.target.value) }
        value={ filter }
        data-testid="search-input"
        type="text"
        name=""
        id=""
      /> : null}
    </div>

  );
}

export default Header;
