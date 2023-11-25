// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import MainPage from './components/MainPage';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;
