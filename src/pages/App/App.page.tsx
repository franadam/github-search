import React from 'react';
import { Dashboard, Error, Login } from '../';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Dashboard></Dashboard>
      <Login />
      <Error />
    </div>
  );
};

export default App;
