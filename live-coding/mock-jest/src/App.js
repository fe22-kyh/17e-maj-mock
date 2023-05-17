import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent.js';
import ProfileComponent from './components/ProfileComponent.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const routes = [
  {
    path: "/",
    element: <LoginComponent />
  },
  {
    path: "/profile",
    element: <ProfileComponent />
  }
]


function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App;
