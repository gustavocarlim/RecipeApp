import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import Login from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';
// import App from '../App';

const email = 'email-input';
const password = 'password-input';

describe('Verifica o componente <Login />', () => {
  test('Verifica se existe um campo email', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId(email);
    expect(emailInput).toBeInTheDocument();
  });

  test('Verifica se existe um campo senha', () => {
    renderWithRouter(<Login />);

    const passwordInput = screen.getByTestId(password);
    expect(passwordInput).toBeInTheDocument();
  });

  test('Verifica se existe um botão de Enter', () => {
    renderWithRouter(<Login />);

    const button = screen.getByTestId('login-submit-btn');
    expect(button).toBeInTheDocument();
  });

  test('Verifica se o botão está desabilitado', () => {
    renderWithRouter(<Login />);

    const button = screen.getByTestId('login-submit-btn');
    expect(button).toBeDisabled();
  });

  test('Verifica se o botão de "Enter" está desabilitado ao inserir um email inválido', async () => {
    renderWithRouter(<Login />);

    const validEmail = 'fulanodetal@testecom';
    const validPassword = '2000';

    expect(screen.getByRole('button', { name: /enter/i })).toBeDisabled();
    await userEvent.type(screen.getByTestId(email), validEmail);
    await userEvent.type(screen.getByTestId(password), validPassword);
    expect(screen.getByRole('button', { name: /enter/i })).toBeDisabled();
  });

  test('Verifica se o botão está habilitado após inserir email e senha', async () => {
    renderWithRouter(<Login />);

    const validEmail = 'chris&greg@teste.com';
    const validPassword = '3146789';

    expect(screen.getByRole('button', { name: /enter/i })).toBeDisabled();
    await userEvent.type(screen.getByTestId(email), validEmail);
    await userEvent.type(screen.getByTestId(password), validPassword);
    expect(screen.getByRole('button', { name: /enter/i })).toBeEnabled();
  });

  // test.only('Verifica se é direcionado para /meals ao clicar no botão', async () => {
  //   renderWithRouter(<App />);

  //   const validEmail = 'chris&greg@teste.com';
  //   const validPassword = '1234567';

  //   await userEvent.type(screen.getByTestId(email), validEmail);
  //   await userEvent.type(screen.getByTestId(password), validPassword);

  //   const btnLogin = screen.getByRole('button', { name: /enter/i });
  //   expect(btnLogin).toBeInTheDocument();
  //   await userEvent.click(btnLogin);
  //   screen.debug();
  //   await waitFor(() => {
  //     expect(window.location.pathname).toBe('/meals');
  //   });
  // });
});
