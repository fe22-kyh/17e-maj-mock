import authService from "../service/authService";
import { Navigate } from 'react-router-dom';

function ProfileComponent() {

  if(!authService.isAuthenticated()) {
    return <Navigate to="/" />
  }

  return (
    <h2 data-testid="profile-header">Profile page</h2>
  )
}


export default ProfileComponent;