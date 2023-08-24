import { screen } from '@testing-library/react';
import DoneRecipes from '../pages/DoneRecipes/doneRecipes';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Verifica o componente DoneRecipes', () => {
  test('Verifica se existe um título', () => {
    renderWithRouter(<DoneRecipes />, { initialEntries: ['/'] });

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  test('verifica se existe um ícone de perfil', () => {
    renderWithRouter(<DoneRecipes />, { initialEntries: ['/'] });

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });
});
