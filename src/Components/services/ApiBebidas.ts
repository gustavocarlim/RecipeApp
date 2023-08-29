export const fetchIngredientsBebida = async (ingredient: string) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data;
};

export const fetchNameBebida = async (name: string) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await response.json();
  return data;
};
export const fetchfirstLetterBebida = async (firstLetter: string) => {
  if (firstLetter.length !== 1 || 0) {
    alert('Please enter only one letter for First Letter search.');
    return { meals: [] };
  }

  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const data = await response.json();
  return data;
};
