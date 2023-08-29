export const fetchIngredients = async (ingredient: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();

  if (!data.meals || data.meals.length === 0) {
    alert('No recipes found for this ingredient.');
  }

  return data;
};

export const fetchName = async (name: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await response.json();

  if (!data.meals || data.meals.length === 0) {
    alert('No recipes found for this name.');
  }

  return data;
};

export const fetchfirstLetter = async (firstLetter: string) => {
  if (firstLetter.length !== 1 || firstLetter === '0') {
    alert('Please enter only one letter for First Letter search.');
    return { meals: [] };
  }

  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const data = await response.json();

  if (!data.meals || data.meals.length === 0) {
    alert('No recipes found for this first letter.');
  }

  return data;
};
