export const fetchIngredients = async (ingredient: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();

  if (!data.meals || data.meals.length === 0) {
    window.alert('No recipes found for this ingredient.');
  }

  return data;
};

export const fetchName = async (name: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await response.json();

  if (!data.meals || data.meals.length === 0) {
    window.alert("Sorry, we haven't found any recipes for these filters.");
    return { meals: [] };
  }

  return data;
};

export const fetchfirstLetter = async (firstLetter: string) => {
  if (firstLetter.length !== 1 || firstLetter === '0') {
    window.alert('Your search must have only 1 (one) character');
    return { meals: [] };
  }

  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const data = await response.json();

  if (!data.meals || data.meals.length === 0) {
    alert('No recipes found for this first letter.');
  }

  return data;
};
