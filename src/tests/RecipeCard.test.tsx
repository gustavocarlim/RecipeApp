import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { mockMeals } from './mocks/mockMeals';
import { renderWithRouter } from './helpers/renderWithRouter';
import RecipeCard from '../Components/RecipeCard';
import { mockDrinks } from './mocks/mockDrinks';

describe('Verifica o funcionamento correto do componente RecipeCard para meals', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockMeals),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Verifica se carrega a primeira receita de comida', async () => {
    const { meals } = mockMeals;

    renderWithRouter(<RecipeCard
      isDrinks={ false }
      id={ meals[0].idMeal }
      index={ 0 }
      imageUrl={ meals[0].strMealThumb }
      name={ meals[0].strMeal }
    />, { initialEntries: ['/meals'] });

    await waitFor(() => {
      const cardTitle = screen.getByText(/corba/i);
      expect(cardTitle).toBeInTheDocument();

      const cardImage = screen.getByRole('img', { name: /corba/i });
      expect(cardImage).toBeInTheDocument();
    });
  });
});

describe('Verifica o funcionamento correto do componente RecipeCard para drinks', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockDrinks),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Verifica se carrega a primeira receita de drink', async () => {
    const { drinks } = mockDrinks;

    renderWithRouter(<RecipeCard
      isDrinks
      id={ drinks[0].idDrink }
      index={ 0 }
      imageUrl={ drinks[0].strDrinkThumb }
      name={ drinks[0].strDrink }
    />, { initialEntries: ['/drinks'] });

    await waitFor(() => {
      const cardTitle = screen.getByText(/gg/i);
      expect(cardTitle).toBeInTheDocument();

      const cardImage = screen.getByRole('img', { name: /gg/i });
      expect(cardImage).toBeInTheDocument();
    });
  });
});
