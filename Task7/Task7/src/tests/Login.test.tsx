import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../pages/Login';

test('renders login form and handles user input', () => {
  render(<Login />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/login/i);

  fireEvent.change(usernameInput, { target: { value: 'admin' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(submitButton);

  expect(screen.queryByText(/login successful!/i)).toBeTruthy();
});