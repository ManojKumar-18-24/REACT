import { useState ,useEffect} from 'react'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth'
import { login,logout } from './store/authSlice';

function App() {
  const [loading ,setLoading] =useState(true);
  const diapatch = useDispatch()

  useEffect(()=>{
      authService.getCurrentUser()
      .then((userData)=>{
         if(userData)
         {
          diapatch(login({userData}));
         }
         else
         {
          diapatch(logout())
         }
      })
      .finally(()=> setLoading(false))
  },[])

  return loading ? (
    <div>Loading</div>
  ) :(
    <>
      <Header/>
      TODO: {/*Outlet */}
      <Footer/>
    </>
  )
}

export default App
