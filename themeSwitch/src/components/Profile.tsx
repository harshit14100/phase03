import { useContext } from 'react'
import { UserContext } from '../context/Context'

function Profile() {
    const context = useContext(UserContext)
    if (!context) return null;

    const {User} = context;
    if(!User) return <div>Please Login</div>
  return (
    <div>
      <h1>name: {User.username}</h1>
    </div>
  )
}

export default Profile
