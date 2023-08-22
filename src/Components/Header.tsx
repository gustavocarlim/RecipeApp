function Header() {
  return (
    <div>
      <img
        src="src/images/profileIcon.svg"
        alt="Profile"
        data-testid="profile-top-btn"
      />
      <img
        src="src/images/searchIcon.svg"
        alt="Search"
        data-testid="search-top-btn"
      />
      <h1 data-testid="page-title">Meals</h1>
    </div>
  );
}

export default Header;
