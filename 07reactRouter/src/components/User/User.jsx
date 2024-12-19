
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
    return (
        <div>User:{userid?userid:"manpj"}</div>
    )
}

export default User
