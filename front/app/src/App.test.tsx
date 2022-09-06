import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { act } from 'react-dom/test-utils';

test('renders home link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorElement = screen.getAllByText("Home").filter((el) => { return el.nodeName === "A" })[0]
  expect(anchorElement).toHaveAttribute("href", "/")
});

test('renders dashboard link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorElement = screen.getAllByText("Dashboard").filter((el) => { return el.nodeName === "A" })[0]
  expect(anchorElement).toHaveAttribute("href", "/dashboard")
});

test('renders login link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorElement = screen.getAllByText("Login").filter((el) => { return el.nodeName === "A" })[0]
  expect(anchorElement).toHaveAttribute("href", "/login")
});

test('renders signup link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorElement = screen.getAllByText("Signup").filter((el) => { return el.nodeName === "A" })[0]
  expect(anchorElement).toHaveAttribute("href", "/signup")
});

test('renders home contents', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorElement = screen.getAllByText("Home").filter((el) => { return el.nodeName === "A" })[0]
  act(() => {
    anchorElement.click();
  })
  const h2Element = screen.getAllByText("Home").filter((el) => { return el.nodeName === "H2" })[0]
  expect(h2Element).toHaveTextContent("Home")
});
