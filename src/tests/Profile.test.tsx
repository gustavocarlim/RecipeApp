import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import { renderWithRouter } from './helpers/renderWithRouter';
import Login from '../pages/Login/Login';

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
  test('verifica se o botão Done Recipes redireciona para a rota correta', async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );
    const doneBtn = screen.getByRole('button', {
      name: /Done Recipes/i,
    });
    await userEvent.click(doneBtn);
    expect(window.location.pathname).toBe('/done-recipes');
  });
  test('verifica se o botão Favorite Recipes redireciona para a rota correta', async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );
    const favBtn = screen.getByRole('button', {
      name: /Favorite Recipes/i,
    });
    await userEvent.click(favBtn);
    expect(window.location.pathname).toBe('/favorite-recipes');
  });
  test('verifica se o e-mail colocado no login está no localStorage', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByTestId('login-submit-btn');
    const validEmail = 'chris&greg@teste.com';
    const validPassword = '1234567';
    await userEvent.type(emailInput, validEmail);
    await userEvent.type(passwordInput, validPassword);
    expect(loginButton).not.toBeDisabled();
    userEvent.click(loginButton);
    await waitFor(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        expect(parsedUser.email).toBe(validEmail);
      } else {
        fail('Usuário não encontrado no localStorage');
      }
    });
  });
  test('verifica se o botão Logout limpa o localStorage e redireciona para a rota "/"', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'test@example.com' }));
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );
    const logoutBtn = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutBtn);
    await waitFor(() => {
      // Verifique se o localStorage foi limpo
      expect(localStorage.getItem('user')).toBe(null);
      // Verifique se a página foi redirecionada para '/'
      expect(window.location.pathname).toBe('/');
    });
  });
});
