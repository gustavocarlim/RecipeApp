import { screen } from '@testing-library/react';
import FavoriteRecipes from '../pages/FavoriteRecipes/favoriteRecipes';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Verifica o componente FavoriteRecipes', () => {
  test('Verifica se existe um título', () => {
    renderWithRouter(<FavoriteRecipes />, { initialEntries: ['/'] });

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  test('verifica se existe um ícone de perfil', () => {
    renderWithRouter(<FavoriteRecipes />, { initialEntries: ['/'] });

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });
});
