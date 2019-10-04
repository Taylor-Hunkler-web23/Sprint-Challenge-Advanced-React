import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'
import Navbar from './components/Navbar.js'
import useDarkMode from './hooks/useDarkMode.js'


test('App renders without crashing', () => {
  render(<App />)
})

test('Players header found in App.js', () => {
  const { getByText } = render(<App />);
  getByText(/Players/i)
})


test('Navbar renders without crashing', () => {
  render(<Navbar />)
})


test('Soccer header found in Navbar.js', () => {
  const { getByText } = render(<Navbar />);
  getByText(/Soccer/i)
})


test('2019 text found in Navbar.js', () => {
  const { getByText } = render(<Navbar />);
  getByText(/2019/i)
})

test('stats text found in Navbar.js', () => {
  const { findByText } = render(<Navbar />);
  findByText(/stats/i)
})


test('useDarkMode renders without crashing', () => {
  render(<useDarkMode />)
})

