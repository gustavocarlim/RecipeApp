import DoneRecipesCard from '../../Components/DoneRecipesCard';

function DoneRecipes() {
  return (
    <div>
      <div>
        <img
          src="src/images/profileIcon.svg"
          alt="Profile"
          data-testid="profile-top-btn"
        />
        <h1 data-testid="page-title">Done Recipes</h1>
        <DoneRecipesCard />
      </div>
    </div>
  );
}

export default DoneRecipes;
