// NavBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Wrap your component with BrowserRouter
import NavBar from './NavBar';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  // Check if the navigation links are present
  const homeLink = screen.getByText('Home');
  const characterLink = screen.getByText('CharacterPage');
  const postLink = screen.getByText('Postig characterc');

  expect(homeLink).toBeInTheDocument();
  expect(characterLink).toBeInTheDocument();
  expect(postLink).toBeInTheDocument();
});

test('navigation links have correct URLs', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  // Check if the navigation links have the correct URLs
  const homeLink = screen.getByText('Home');
  const characterLink = screen.getByText('CharacterPage');
  const postLink = screen.getByText('Postig characterc');

  expect(homeLink).toHaveAttribute('href', '/');
  expect(characterLink).toHaveAttribute('href', '/live');
  expect(postLink).toHaveAttribute('href', '/post');
});

test('navigation links have white color', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  // Check if the navigation links have white color
  const homeLink = screen.getByText('Home');
  const characterLink = screen.getByText('CharacterPage');
  const postLink = screen.getByText('Postig characterc');

  expect(homeLink).toHaveStyle({ color: 'white' });
  expect(characterLink).toHaveStyle({ color: 'white' });
  expect(postLink).toHaveStyle({ color: 'white' });
});
