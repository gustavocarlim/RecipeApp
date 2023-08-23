import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [button, setButton] = useState(false);

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
      {button ? <input data-testid="search-input" type="text" name="" id="" /> : null}
      <h1 data-testid="page-title">Meals</h1>
    </div>

  );
}

export default Header;
