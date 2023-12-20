import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Signup from './pages/Signup';
import Login from './pages/Login';

const router = createBrowserRouter([
  {path: "/", element: <Layout/>, children: [
      {path: "/", element: <Home/>},
      {path: "/signup", element: <Signup/>},
      {path: "/login", element: <Login/>},
   ]
  }
]);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
