

import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button.js'; // Import the component using .mjs extension

test('renders a button with the correct label', () => {
  const { getByText } = render(<Button label="Click me" />);
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});
