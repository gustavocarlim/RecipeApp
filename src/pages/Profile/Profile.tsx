import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';

function Profile() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const emailUser = JSON.parse(user);
      setEmail(emailUser.email);
    }
  }, []);

  return (
    <>
      <div>
        <img
          src="src/images/profileIcon.svg"
          alt="Profile"
          data-testid="profile-top-btn"
        />
        <h1 data-testid="page-title">PROFILE</h1>
        <h4
          data-testid="profile-email"
        >
          {email}
        </h4>
        <button
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
        <button
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </div>
      <div>
        <Footer />
      </div>

    </>
  );
}

export default Profile;
