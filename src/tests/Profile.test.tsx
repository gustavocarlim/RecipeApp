import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile/Profile';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Verifica o componente Profile', () => {
  test('Verifica se existe um título', () => {
    renderWithRouter(<Profile />, { initialEntries: ['/'] });

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  test('verifica se existe um ícone de perfil', () => {
    renderWithRouter(<Profile />, { initialEntries: ['/'] });

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });

  test('verifica se o botão Done Recipes redireciona para a rota correta', async () => { // não funciona
    renderWithRouter(<Profile />);

    const doneBtn = screen.getByRole('button', {
      name: /Done Recipes/i });

    await userEvent.click(doneBtn);
    expect(window.location.pathname).toEqual('/done-recipes');
  });

  test('verifica se o botão Favorite Recipes redireciona para a rota correta', async () => { // não funciona
    renderWithRouter(<Profile />);

    const favBtn = screen.getByRole('button', {
      name: /Favorite Recipes/i });

    await userEvent.click(favBtn);
    expect(window.location.pathname).toEqual('/favorite-recipes');
  });
});
