export const fetchIngredientsBebida = async (ingredient: string) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  if (!data.drink || data.drink.length === 0) {
    window.alert('No recipes found for this ingredient.');
  }

  return data;
};

export const fetchNameBebida = async (name: string) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await response.json();
  if (!data.drinks || data.drinks.length === 0) {
    window.alert("Sorry, we haven't found any recipes for these filters.");
    return { drinks: [] };
  }

  return data;
};

export const fetchfirstLetterBebida = async (firstLetter: string) => {
  if (firstLetter.length !== 1 || 0) {
    window.alert('Your search must have only 1 (one) character');
    return { drinks: [] };
  }

  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const data = await response.json();

  if (!data.drink || data.drink.length === 0) {
    alert('No recipes found for this first letter.');
  }

  return data;
};
