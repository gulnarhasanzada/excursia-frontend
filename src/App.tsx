import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import ErrorPage from './pages/Error';
import Auth, {action as authAction} from './pages/Auth';
import {action as logoutAction} from "./pages/Logout";
import { checkAuthLoader, tokenLoader } from './util/auth';

const router = createBrowserRouter([
  {path: "/", 
   element: <Layout/>, 
   errorElement: <ErrorPage />,
   id: "root",
   loader: tokenLoader,
   children: [
      {index: true, element: <Home/>},
      {
        path: "auth", 
        element: <Auth/>,
        action: authAction,
      },
      {
        path: "logout",
        action: logoutAction
      },
      {
        path: "user",
        loader: checkAuthLoader,
        element: <Home/>
      }
   ]
  }
]);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
