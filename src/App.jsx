import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';

function App() {
  return (
      <Main />
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
