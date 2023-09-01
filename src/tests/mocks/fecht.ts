import mealCategories from './ mealCategories';
import beefMeals from './beefMeals ';
import breakfastMeals from './breakfastMeals';
import chickenMeals from './chickenMeals';
// import cocoaDrinks from './cocoaDrinks';
import corba from './corba ';
import dessertMeals from './dessertMeals';
import drinksByFirstLetter from './drinksByFirstLetter';
import drinksList from './drinksList';
// import gg from './gg';
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

export const mockMealsFetch = (url: string) => Promise.resolve({
  ok: true,
  json: () => {
    const mealUrls: { [key: string]: any } = {
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list': mealCategories,
      'https://www.themealdb.com/api/json/v1/1/search.php?s=': mealsList,
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=Chicken': mealsByIngredient,
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef': beefMeals,
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast': breakfastMeals,
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert': dessertMeals,
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat': goatMeals,
      'https://www.themealdb.com/api/json/v1/1/search.php?f=C': mealsByFirstLetter,
      'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken': mealsByName,
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken': chickenMeals,
      'https://www.themealdb.com/api/json/v1/1/search.php?f=a': appleFran,
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977': corba,
    };

    if (url in mealUrls) {
      return Promise.resolve(mealUrls[url]);
    }

    return console.log(url);
  },
});

export const mockDrinksFetch = (url: string) => Promise.resolve({
  ok: true,
  json: () => {
    const drinkUrls: { [key: string]: any } = {
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list': drinkCategories,
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=': drinksList,
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink': ordinaryDrinks,
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail': cocktailDrinks,
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake': milkDrinks,
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin': ginDrinks,
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown': otherDrinks,
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997': oneDrinkId15997,
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=A': drinksByFirstLetter,
      // 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997': gg,
    };

    if (url in drinkUrls) {
      return Promise.resolve(drinkUrls[url]);
    }

    return console.log(url);
  },
});
