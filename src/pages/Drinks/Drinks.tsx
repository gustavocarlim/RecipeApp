import { useEffect, useState } from 'react';
import RecipeCard from '../../Components/RecipeCard';

interface Drink {
  id: string;
  imageUrl: string;
  name: string;
}
function Drinks() {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  const fetchDrinks = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    const drinkData = data.drinks.map((drink: any) => ({
      id: drink.idDrink,
      imageUrl: drink.strDrinkThumb,
      name: drink.strDrink,
    }));
    setDrinks(drinkData);
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  const drinksToRender = drinks.slice(0, 12);

  return (
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
        {drinksToRender.map((drink, index) => (
          <RecipeCard
            key={ drink.id }
            index={ index }
            imageUrl={ drink.imageUrl }
            name={ drink.name }
          />
        ))}
      </div>
    </div>
  );
}

export default Drinks;
