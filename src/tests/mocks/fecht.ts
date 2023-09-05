import mealCategories from './ mealCategories';
import beefMeals from './beefMeals ';
import breakfastMeals from './breakfastMeals';
import chickenMeals from './chickenMeals';
import cocoaDrinks from './cocoaDrinks';
import corba from './corba ';
import dessertMeals from './dessertMeals';
import drinksByFirstLetter from './drinksByFirstLetter';
import drinksList from './drinksList';
import gg from './gg';
import appleFran from './appleFran';
import ginDrinks from './ginDrinks';
import goatMeals from './goatMeals ';
import mealsByFirstLetter from './mealsByFirstLetter';
import mealsByIngredient from './mealsByIngredient';
import mealsByName from './mealsByName';
import mealsList from './mealsList';
import milkDrinks from './milkDrinks';
import { drinkCategories } from './mockdrinkCategories';
import cocktailDrinks from './ocktailDrinks';
import oneDrinkId15997 from './ononeDrinkId15997';
import ordinaryDrinks from './ordinaryDrinks';
import otherDrinks from './otherDrinks';

export const mockMealsFetch = (url: any) => Promise.resolve({
  ok: true,
  json: () => {
    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?c=list') return Promise.resolve(mealCategories);
    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') return Promise.resolve(mealsList);
    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?i=Chicken') return Promise.resolve(mealsByIngredient);
    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef') return Promise.resolve(beefMeals);
    /*     if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast') return Promise.resolve(breakfastMeals);
    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert') return Promise.resolve(dessertMeals); */
    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat') return Promise.resolve(goatMeals);
    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?f=C') return Promise.resolve(mealsByFirstLetter);
    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken') return Promise.resolve(mealsByName);
    /* if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken') return Promise.resolve(chickenMeals);
    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?f=a') return Promise.resolve(appleFran); */
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list') return Promise.resolve(drinkCategories);
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') return Promise.resolve(drinksList);
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink') return Promise.resolve(ordinaryDrinks);
    /*   if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail') return Promise.resolve(cocktailDrinks); */
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake') return Promise.resolve(milkDrinks);
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin') return Promise.resolve(ginDrinks);
    /*   if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown') return Promise.resolve(otherDrinks); */
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997') return Promise.resolve(oneDrinkId15997);
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=A') return Promise.resolve(drinksByFirstLetter);
  /*   if (url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977') return Promise.resolve(corba);
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997') return Promise.resolve(gg); */
  },
});
