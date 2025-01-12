import authService from '../../../appwrite/auth'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout as authLogout } from '../../store/authSlice';
function LogoutBtn() {

    const dispatch = useDispatch();
    const navigate =  useNavigate();
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(authLogout())
            navigate('/')
        })
    }
    return (
        <button
        className='inline-block px-6 py-2 duration-200
        hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn
