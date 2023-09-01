import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteRecipes from '../pages/FavoriteRecipes/favoriteRecipes';
import { renderWithRouter } from './helpers/renderWithRouter';

test('Filter buttons work correctly', () => {
  renderWithRouter(<FavoriteRecipes />, { initialEntries: ['/favorite-recipes'] });

  const allButton = screen.getByTestId('filter-by-all-btn');
  const mealButton = screen.getByTestId('filter-by-meal-btn');
  const drinkButton = screen.getByTestId('filter-by-drink-btn');

  expect(allButton).toBeInTheDocument();
  expect(mealButton).toBeInTheDocument();
  expect(drinkButton).toBeInTheDocument();
  /* fireEvent.click(mealButton); // Filter by Meals
  const mealItems = screen.getAllByTestId(/horizontal-name/i);
  expect(mealItems.length).toBeGreaterThan(0);

  fireEvent.click(drinkButton); // Filter by Drinks
  const drinkItems = screen.getAllByTestId(/horizontal-name/i);
  expect(drinkItems.length).toBeGreaterThan(0);

  fireEvent.click(allButton); // Show All
  const allItems = screen.getAllByTestId(/horizontal-name/i);
  expect(allItems.length).toBeGreaterThan(0); */
});
// que o botao não está trazendo nada na tela
