import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

test('renders home link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorElement = screen.getAllByText("Home")[0]
  expect(anchorElement).toHaveAttribute("href", "/")
});

test('renders dashboard link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorElement = screen.getAllByText("Dashboard")[0]
  expect(anchorElement).toHaveAttribute("href", "/dashboard")
});

test('renders login link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorElement = screen.getAllByText("Login")[0]
  expect(anchorElement).toHaveAttribute("href", "/login")
});

test('renders signup link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorElement = screen.getAllByText("Signup")[0]
  expect(anchorElement).toHaveAttribute("href", "/signup")
});
