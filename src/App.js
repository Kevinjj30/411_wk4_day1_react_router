import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
// Write imports for Router & BrowserRouter here //

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Router/>
    </BrowserRouter>
  );
}

export default App;
