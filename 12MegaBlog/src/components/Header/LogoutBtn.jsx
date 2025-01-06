import authService from '../../../appwrite/auth'
import {useDispatch} from 'react-redux'
function LogoutBtn() {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(authService.logout())
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
