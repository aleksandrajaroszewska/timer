/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Task from './atoms/Task';
import Timer from './components/Timer';

test('renders delete button', () => {
  render(<Task />);
  const button = screen.getByText('delete');
  expect(button).toBeInTheDocument();
});

describe('timer', () => {
  afterEach(cleanup);
  it('renders', () => {
    const { getByText } = render(<Timer />);

    getByText('Stop');
  });
});
