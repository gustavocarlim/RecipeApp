import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar';
import Footer from '../../Components/Footer';
import RecipeCard from '../../Components/RecipeCard';
import RecipesContext from '../../context/RecipesContext';
import {
  fetchIngredientsBebida,
  fetchNameBebida,
  fetchfirstLetterBebida } from '../../Components/services/ApiBebidas';
import { Meals } from '../../types';

interface Drink {
  id: string;
  imageUrl: string;
  name: string;
}
function Drinks() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { filter } = useContext(RecipesContext);
  const navigate = useNavigate();
  const [searchFailed, setSearchFailed] = useState(false);
  const [recommendedMeals, setRecommendedMeals] = useState<Meals[]>([]);

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
  const fetchRecommendedMeals = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      const mealData = data.meals.map((meal: any) => ({
        id: meal.idMeal,
        imageUrl: meal.strMealThumb,
        name: meal.strMeal,
      }));
      setRecommendedMeals(mealData.slice(0, 6)); // Pode ajustar o número de recomendações aqui
    } catch (error) {
      console.error('Error fetching recommended meals:', error);
    }
  };
  const fetchDrinks = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    const drinkData = data.drinks.map((drink: any) => ({
      id: drink.idDrink,
      imageUrl: drink.strDrinkThumb,
      name: drink.strDrink,
    }));
    console.log(data);
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
    fetchCategories();
    fetchDrinks();
    fetchRecommendedMeals();
    fetchDrinksByCategory(selectedCategory || '');

    if (filter?.type === 'name') {
      fetchNameBebida(filter.value).then((data) => {
        const drinkData = data.drinks.map((drink: any) => ({
          id: drink.idDrink,
          imageUrl: drink.strDrinkThumb,
          name: drink.strDrink,
        }));
        if (drinkData.length === 1) {
          const drinkId = drinkData[0].id;
          navigate(`/drinks/${drinkId}`);
        } else {
          setDrinks(drinkData);
        }
      });
    } else if (filter?.type === 'firstletter') {
      fetchfirstLetterBebida(filter.value).then((data) => {
        const drinkData = data.drinks.map((drink: any) => ({
          id: drink.idDrink,
          imageUrl: drink.strDrinkThumb,
          name: drink.strDrink,
        }));
        setDrinks(drinkData);
      });
    } else if (filter?.type === 'ingredientes') {
      fetchIngredientsBebida(filter.value).then((data) => {
        const drinkData = data.drinks.map((drink: any) => ({
          id: drink.idDrink,
          imageUrl: drink.strDrinkThumb,
          name: drink.strDrink,
        }));
        setDrinks(drinkData);
      });
    }
  }, [selectedCategory, filter]);

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
    <>
      <div>

        <Header />
        <SearchBar />
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
        <Footer />
      </div>
      <Footer />
    </>

  );
}
export default Drinks;
