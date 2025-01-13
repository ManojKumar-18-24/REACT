import { useState ,useEffect} from 'react'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth'
import { login,logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';

// function App() {
//   const [loading ,setLoading] =useState(true);
//   const diapatch = useDispatch()

//   useEffect(()=>{
//       authService.getCurrentUser()
//       .then((userData)=>{
//          if(userData)
//          {
//           diapatch(login({userData}));
//          }
//          else
//          {
//           diapatch(logout())
//          }
//       })
//       .finally(()=> setLoading(false))
//   },[])

//   return loading ? (
//     <div>Loading</div>
//   ) :(
//     <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen">
//       <Header/>
//       <Outlet/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="bg-gradient-to-r from-gold-500 via-white-500 to-orange-500 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;