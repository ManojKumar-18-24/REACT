import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [user,SetUser]=useState('');
  
  return (
    <UserContextProvider props={{user,SetUser}}>
    <h1>React with share</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
