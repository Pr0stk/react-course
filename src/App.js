import './styles/App.css';
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context';
import AppRouter from './components/AppRouter';

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
        setIsAuth(true)
    }
    setLoading(false);
}, [])

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
    <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>
  </AuthContext.Provider>
  );
}

export default App;