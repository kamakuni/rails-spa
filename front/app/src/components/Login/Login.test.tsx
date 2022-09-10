import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { store } from '../../store';

test('inputs email address', () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const input: HTMLInputElement = screen.getByRole("email")
  userEvent.type(input, "test")
  expect(input.value).toBe("test")
});

