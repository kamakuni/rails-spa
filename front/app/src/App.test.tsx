import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { act } from 'react-dom/test-utils';
import { setupServer } from "msw/node";
import { rest } from "msw";

describe("test for app", () => {

  const handlers = [
    rest.get("http://localhost:3000/api/v1/login", (req, res, ctx) => {
      return res(
        ctx.json({
          message: ""
        })
      )
    })
  ]

  const server = setupServer(...handlers)

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

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

  test('renders unauthorized message after clicking /dashboard', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const anchorElement = screen.getAllByText("Dashboard").filter((el) => { return el.nodeName === "A" })[0]
    act(() => {
      anchorElement.click();
    })
    const divElement = screen.getAllByText("Users is unauthorized.");
    expect(divElement).toHaveLength(1);
  });

  test('renders login form after clicking /login', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const anchorElement = screen.getAllByText("Login").filter((el) => { return el.nodeName === "A" })[0]
    act(() => {
      anchorElement.click();
    })
    const labelElement = await screen.findByText("Email:")
    expect(labelElement).not.toBe(null)
  })

  test('renders login form after clicking /login', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const anchorElement = screen.getAllByText("Login").filter((el) => { return el.nodeName === "A" })[0]
    act(() => {
      anchorElement.click();
    })
    const labelElement = await screen.findByText("Email:")
    expect(labelElement).not.toBe(null)
  })


  test('renders signup form after clicking /signup', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const anchorElement = screen.getAllByText("Signup").filter((el) => { return el.nodeName === "A" })[0]
    act(() => {
      anchorElement.click();
    })
    const labelElement = await screen.findByText("Email:")
    expect(labelElement).not.toBe(null)
  })

})