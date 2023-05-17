import { render, screen } from '@testing-library/react';
import App from './App';
import authService from 'authService';

test("Redirect to profile if logged in", async () => {
  await authService.login("bob", "123");

  expect(global.window.location.pathname).toBe("/");
  render(<App />);

  const page = screen.getByTestId('profile-header');
  
  expect(page).toBeInTheDocument();
  expect(global.window.location.pathname).toBe("/profile");
});
