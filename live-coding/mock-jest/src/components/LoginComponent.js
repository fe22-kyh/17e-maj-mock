import authService from "../service/authService";
import { Navigate } from 'react-router-dom';

function LoginComponent() {
  if(authService.isAuthenticated()) {
    return <Navigate to="/profile" />
  }

  return (
    <>
      <form>
        <h2 data-testid="login-header">Login</h2>

        <button>Login</button>
      </form>
    </>
  )
}

export default LoginComponent;