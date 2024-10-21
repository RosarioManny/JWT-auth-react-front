import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import NavBar from './components/NavBar';

import './App.css'

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <NavBar user={user} />
      <Routes>
        { user ? (
          <Route path='/' element={<Dashboard user={user} />}/>
        ) : (
          <Route path='/' element={<Landing />}/>
        )
        
        }
      </Routes>
    </>
  )
}

export default App
