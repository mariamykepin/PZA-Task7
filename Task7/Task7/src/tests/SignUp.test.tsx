import { render, fireEvent, screen } from '@testing-library/react';
import SignUp from '../pages/SignUp';
import { BrowserRouter } from 'react-router-dom';

test('renders sign up form and handles sign up', () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/sign up/i);

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  fireEvent.click(submitButton);

  expect(screen.queryByText(/sign-up successful!/i)).toBeTruthy();
});
