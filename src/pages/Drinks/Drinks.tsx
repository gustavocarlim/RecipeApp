import Footer from '../../Components/Footer';

function Drinks() {
  return (
    <>
      <div>
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
          <h1 data-testid="page-title">Drinks</h1>
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </>
  );
}

export default Drinks;
