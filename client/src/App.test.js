import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'
import Navbar from './components/Navbar.js'

test ('App renders without crashing', () => {
  render (<App/>)
})

test ('Players header found in App.js', () =>{
  const {getByText} = render (<App/>);
  getByText (/Players/i)
})



test ('Soccer header found in Navbar.js', () =>{
  const {getByText} = render (<Navbar/>);
  getByText (/Soccer/i)
})
