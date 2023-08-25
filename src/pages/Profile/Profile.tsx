import Footer from '../../Components/Footer';

function Profile() {
  return (
    <>
      <div>
        <img
          src="src/images/profileIcon.svg"
          alt="Profile"
          data-testid="profile-top-btn"
        />
        <h1 data-testid="page-title">Profile</h1>
      </div>
      <div>
        <Footer />
      </div>

    </>
  );
}

export default Profile;
