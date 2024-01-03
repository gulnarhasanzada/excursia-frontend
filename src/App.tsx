import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import ErrorPage from './pages/Error';
import Auth, {action as authAction} from './pages/Auth';
import {action as logoutAction} from "./pages/Logout";

const router = createBrowserRouter([
  {path: "/", 
   element: <Layout/>, 
   errorElement: <ErrorPage />,
   children: [
      {index: true, element: <Home/>},
      {
        path: "auth", 
        element: <Auth/>,
        action: authAction},
      {
        path: "logout",
        action: logoutAction
      }
   ]
  }
]);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
