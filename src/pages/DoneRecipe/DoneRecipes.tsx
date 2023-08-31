import DoneRecipes from '../../Components/DoneRecipesCard';

function DoneRecipies() {
  return (
    <div>
      <div>
        <img
          src="src/images/profileIcon.svg"
          alt="Profile"
          data-testid="profile-top-btn"
        />
        <h1 data-testid="page-title">Done Recipes</h1>
        <DoneRecipes />
      </div>
    </div>
  );
}

export default DoneRecipies;
