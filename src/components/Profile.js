import {useContext, useState} from 'react'

import UserContext from '../context/UserContext'

function Profile() {
    const {user, setUser} = useContext(UserContext);

    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({id:1,userName:"sinan",bio:"lorem ipsom wtf"})
            setLoading(false)
        },1500)
    }
    const handleLogout = () => {
        setUser(null);
    }
  return (
    <div>
        <code>
            {!user && (
                <button onClick={handleLogin}>{loading ? "loading..." : "login"}</button>
                )
            }
            
            <br />
            {JSON.stringify(user)}
            <br />
            {
                user && <button onClick={handleLogout}>Logout</button>
            }
        </code>
    </div>
  )
}

export default Profile