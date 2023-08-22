// import React from 'react';
// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
// import Header from '../Components/Header';

// describe('Verifica o componente <Header />', () => {
//   test('Verifica se existe um campo com ícone de perfil', () => {
//     render(<Header />);

//     const emailInput = screen.getByTestId('profile-top-btn');
//     expect(emailInput).toBeInTheDocument();
//   });

//   //   test('Verifica se existe um campo senha', () => {
//   //     render(<Login />);

//   //     const passwordInput = screen.getByTestId(password);
//   //     expect(passwordInput).toBeInTheDocument();
//   //   });

//   //   test('Verifica se existe um botão de Enter', () => {
//   //     render(<Login />);

//   //     const button = screen.getByTestId('login-submit-btn');
//   //     expect(button).toBeInTheDocument();
//   //   });

//   //   test('Verifica se o botão está desabilitado', () => {
//   //     render(<Login />);

//   //     const button = screen.getByTestId('login-submit-btn');
//   //     expect(button).toBeDisabled();
//   //   });

//   //   test('Verifica se o botão de "Enter" está desabilitado ao inserir um email inválido', async () => {
//   //     render(<Login />);

//   //     const validEmail = 'fulanodetal@testecom';
//   //     const validPassword = '2000';

//   //     expect(screen.getByRole('button', { name: /enter/i })).toBeDisabled();
//   //     await userEvent.type(screen.getByTestId(email), validEmail);
//   //     await userEvent.type(screen.getByTestId(password), validPassword);
//   //     expect(screen.getByRole('button', { name: /enter/i })).toBeDisabled();
//   //   });

//   //   test('Verifica se o botão está habilitado após inserir email e senha', async () => {
//   //     render(<Login />);

//   //     const validEmail = 'chris&greg@teste.com';
//   //     const validPassword = '3146789';

//   //     expect(screen.getByRole('button', { name: /enter/i })).toBeDisabled();
//   //     await userEvent.type(screen.getByTestId(email), validEmail);
//   //     await userEvent.type(screen.getByTestId(password), validPassword);
//   //     expect(screen.getByRole('button', { name: /enter/i })).toBeEnabled();
//   //   });

//   //   test('Verifica se é direcionado para /meals ao clicar no botão', async () => {
//   //     render(<Login />);

//   //     const validEmail = 'chris&greg@teste.com';
//   //     const validPassword = '1234567';

//   //     await userEvent.type(screen.getByTestId(email), validEmail);
//   //     await userEvent.type(screen.getByTestId(password), validPassword);

// //     const btnLogin = screen.getByRole('button', { name: /enter/i });
// //     expect(btnLogin).toBeInTheDocument();
// //     await userEvent.click(btnLogin);
// //     expect(window.location.pathname).toBe('/meals');
// //   });
// });
