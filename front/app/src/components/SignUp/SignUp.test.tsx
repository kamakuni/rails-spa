import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { store } from '../../store';

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