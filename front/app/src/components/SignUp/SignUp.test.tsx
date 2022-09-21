import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { store } from '../../store';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';

describe("test for Signup", () => {

  const handlers = [
    rest.post("http://localhost:3000/api/v1/signup", async (req, res, ctx) => {
      const isValid = (email: string, password: string) => email === "valid" && password === "valid"
      const data = await req.json()
      if (isValid(data.email, data.password)) {
        return res(
          ctx.status(200),
          ctx.cookie("_session_id", "valid", {
            httpOnly: true,
            path: '/'
          }),
          ctx.json({
            message: "Users is authorized."
          })
        )
      } else {
        return res(
          ctx.status(400),
          ctx.json({
            message: "Users is unauthorized."
          })
        )
      }

    })
  ]

  const server = setupServer(...handlers)

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('inputs email address', () => {
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const input = screen.getAllByRole("textbox")[0] as HTMLInputElement
    userEvent.type(input, "test")
    expect(input.value).toBe("test")
  });

  test('inputs password address', () => {
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const input = screen.getAllByRole("textbox")[1] as HTMLInputElement
    userEvent.type(input, "test")
    expect(input.value).toBe("test")
  });

})