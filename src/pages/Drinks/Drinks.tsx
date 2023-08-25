import { useEffect, useState } from 'react';
import RecipeCard from '../../Components/RecipeCard';

interface Drink {
  id: string;
  imageUrl: string;
  name: string;
}

function Drinks() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchCategories = async () => {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    if (selectedCategory) {
      url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    }

    const response = await fetch(url);
    const data = await response.json();
    const categoryData = data.drinks ? data.drinks.map(
      (category: any) => category.strCategory,
    ) : [];
    setCategories(categoryData.slice(0, 5));
  };

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

  const fetchDrinksByCategory = async (category: string) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const drinkData = data.drinks.map((drink: any) => ({
        id: drink.idDrink,
        imageUrl: drink.strDrinkThumb,
        name: drink.strDrink,
      }));
      setDrinks(drinkData.slice(0, 12));
    } catch (error) {
      console.error('Error fetching drinks:', error);
    }
  };

  useEffect(() => {
    fetchDrinks();
    fetchCategories();
    fetchDrinksByCategory(selectedCategory || '');
  }, [selectedCategory]);

  const handleCategoryFilter = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      fetchDrinksByCategory(category);
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
  };

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
        {categories.map((category, index) => (
          <button
            key={ index }
            onClick={ () => handleCategoryFilter(category) }
            data-testid={ `${category}-category-filter` }
          >
            {category}
          </button>
        ))}
        <button onClick={ handleClearFilters } data-testid="All-category-filter">
          Clear Filters
        </button>
        {drinksToRender.map((drink, index) => (
          <RecipeCard
            key={ drink.id }
            id={ drink.id }
            index={ index }
            imageUrl={ drink.imageUrl }
            name={ drink.name }
            isDrinks
          />
        ))}
      </div>
    </div>
  );
}

export default Drinks;
