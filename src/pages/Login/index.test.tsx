import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Login } from './index';

test('Verifica se existe um botão do tipo submit na página', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const submitButton = screen.getByRole('button', { name: 'Entrar' });

  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toHaveAttribute('type', 'submit');
});
